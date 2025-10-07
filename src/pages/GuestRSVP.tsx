import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import FormInput from "../components/FormInput";
import {
    type GuestRSVPFormData,
    type FormErrors,
    validateForm,
} from "../types/validation";
import Category from "../components/categoryInput";
import AccommodationDates from "../components/AccomodationDates";
import CustomPhoneInput from "../components/PhoneInput";
import { getInviteDetails } from "../services/api.ts";

export default function GuestRSVP() {
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [inviteData, setInviteData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [availableAccommodationDates, setAvailableAccommodationDates] = useState<Date[]>([]);
    const [paramError, setParamError] = useState<string>("");

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const eventId = searchParams.get('eventId');
    const groupId = searchParams.get('groupId');


    // url in format /?eventId=b58a0806-61bd-4036-86f0-0c88bd49b10a=123&groupId=d89b5dda-ab0d-4184-b644-26bc2a0b5fc6

    // try : http://localhost:5173/?eventId=b58a0806-61bd-4036-86f0-0c88bd49b10a&groupId=d89b5dda-ab0d-4184-b644-26bc2a0b5fc6

    useEffect(() => {
        if (!eventId || !groupId) {
            setParamError("Missing required parameters. Please use a valid invite link.");
            setIsLoading(false);
            return;
        }

        setIsLoading(true);
        setParamError("");

        getInviteDetails(eventId, groupId)
            .then((res) => {
                const data: any = res.data;
                setInviteData(data);
                const eventDetails = data?.event;
                if (eventDetails?.start_date_time && eventDetails?.end_date_time) {
                    const startDate = new Date(eventDetails.start_date_time);
                    const endDate = new Date(startDate);
                    endDate.setDate(endDate.getDate() + 30);
                    startDate.setUTCHours(0, 0, 0, 0);
                    endDate.setUTCHours(0, 0, 0, 0);

                    const dates: Date[] = [];
                    const currentDate = new Date(startDate);
                    while (currentDate <= endDate) {
                        dates.push(new Date(currentDate));
                        currentDate.setDate(currentDate.getDate() + 1);
                    }
                    setAvailableAccommodationDates(dates);
                }
            })
            .catch((error) => {
                console.error("Error loading invite details:", error);
                setParamError("Unable to load invite details. Please check your invite link.");
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [eventId, groupId]);

    const { register, control, handleSubmit, watch, getValues } =
        useForm<GuestRSVPFormData>({
            defaultValues: {
                name: "",
                phone: "",
                email: "",
                personalNote: "",
                rsvp: "",
                guest: "",
                food: "",
                alcohol: "None",
                accommodationDates: [],
            },
        });

    const rsvpStatus = watch("rsvp");
    const isAttending = rsvpStatus === "Attending";

    const formConfig = inviteData?.rsvpPreferences?.formConfig;
    const eventDetails = inviteData?.event;
    const groupName = inviteData?.group?.name;

    const onSubmit = async () => {
        setIsSubmitting(true);
        const data = getValues();

        const validationErrors = validateForm(data);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setIsSubmitting(false);
            return;
        }

        try {
            console.log("Form submitted:", data);
            setErrors({});
            if (data.rsvp === "Attending") {
                navigate("/guest-rsvp-attending");
            } else if (data.rsvp === "Not Attending") {
                navigate("/guest-rsvp-not-attending");
            } else if (data.rsvp === "Maybe") {
                navigate("/guest-rsvp-maybe");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Error submitting form. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const clearError = (fieldName: keyof FormErrors) => {
        if (errors[fieldName]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[fieldName];
                return newErrors;
            });
        }
    };

    // Show error if parameters are missing or loading failed
    if (paramError) {
        return (
            <div className="flex items-center justify-center w-full min-h-screen bg-[#272938]">
                <div className="text-center text-white px-4">
                    <h2 className="text-2xl font-bold mb-4">Invalid Invite Link</h2>
                    <p className="mb-4">{paramError}</p>
                    <p className="text-sm opacity-75">
                        Please contact the event organizer for a valid invite link.
                    </p>
                </div>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="flex items-center justify-center w-full min-h-screen bg-[#272938]">
                <div className="text-white text-xl">Loading event details...</div>
            </div>
        );
    }

    if (formConfig && !formConfig.isRsvpAllowed) {
        return (
            <div className="flex items-center justify-center w-full min-h-screen bg-[#272938]">
                <div className="text-center text-white px-4">
                    <h2 className="text-2xl font-bold mb-4">RSVP Closed</h2>
                    <p>The RSVP period for this event has ended.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center w-full min-h-screen pt-20 pb-10 bg-white">
            <div
                className="w-full h-full bg-cover bg-center bg-fixed bg-[#272938] fixed inset-0 "
                style={{ backgroundImage: 'url("back1.svg")' }}
            />

            <div className="relative z-10 flex flex-col items-center w-full px-4 md:px-8">
                <div className="flex items-center w-full max-w-2xl mb-2 text-white ">
          <span className="text-xl font-medium md:text-3xl">
            {eventDetails?.title || "Event Overview"}
          </span>
                </div>

                <div className="w-full max-w-2xl mb-6 text-white">
                    <p className="text-xl md:text-xl">
                        {eventDetails?.invite_message || "Please share these details to help us plan better!"}
                    </p>
                    {groupName && (
                        <p className="text-sm md:text-base mt-2 opacity-90">
                            Invited group: {groupName}
                        </p>
                    )}
                    {eventDetails?.location && (
                        <p className="text-sm md:text-base opacity-90">
                            Location: {eventDetails.location}
                        </p>
                    )}
                    {formConfig?.daysUntilLock && formConfig.daysUntilLock > 0 && (
                        <p className="text-sm md:text-base mt-2 font-semibold">
                            RSVP closes in {formConfig.daysUntilLock} days
                        </p>
                    )}
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl min-w-[342px] mx-auto rounded-xl shadow-md px-4 py-6 md:px-10 md:pt-14 md:pb-4 space-y-8 bg-gradient-to-t from-[#fdcfc8] to-white"
                >
                    <div className="relative z-10 space-y-4">
                        <h2 className="mb-2 text-base font-semibold text-gray-700">
                            Personal Details
                        </h2>

                        <div onClick={() => clearError("name")}>
                            <FormInput
                                name="name"
                                register={register}
                                error={errors.name}
                                placeholder="Name"
                                required
                            />
                        </div>

                        <div onClick={() => clearError("phone")}>
                            <CustomPhoneInput control={control} error={errors.phone} />
                        </div>

                        <div onClick={() => clearError("email")}>
                            <FormInput
                                name="email"
                                register={register}
                                error={errors.email}
                                placeholder="Email Id"
                                type="email"
                            />
                        </div>

                        <FormInput
                            name="personalNote"
                            register={register}
                            error={errors.personalNote}
                            placeholder="Personal Note"
                            rows={2}
                        />
                    </div>

                    {formConfig?.collectAttendance && (
                        <div onClick={() => clearError("rsvp")}>
                            <Category
                                title="RSVP Status"
                                name="rsvp"
                                options={[
                                    { src: "tick.svg", label: "Attending" },
                                    { src: "cross.svg", label: "Not Attending" },
                                    { src: "maybe.svg", label: "Maybe" },
                                ]}
                                control={control}
                                error={errors.rsvp}
                                required
                            />
                        </div>
                    )}

                    {isAttending && (
                        <>
                            {formConfig?.collectGuestCount && (
                                <div onClick={() => clearError("guest")}>
                                    <Category
                                        title="Additional Guest Count"
                                        name="guest"
                                        options={[
                                            { src: "+1.svg", label: "+1" },
                                            { src: "+2.svg", label: "+2" },
                                            { src: "family.svg", label: "Family" },
                                        ]}
                                        control={control}
                                        error={errors.guest}
                                        required
                                    />
                                </div>
                            )}

                            {formConfig?.collectFood && (
                                <div onClick={() => clearError("food")}>
                                    <Category
                                        title="Food Preference"
                                        name="food"
                                        options={[
                                            { src: "veg.svg", label: "Veg" },
                                            { src: "nonveg.svg", label: "Non-Veg" },
                                            { src: "vn.svg", label: "Anything" },
                                        ]}
                                        control={control}
                                        error={errors.food}
                                        required
                                    />
                                </div>
                            )}

                            {formConfig?.collectAlcohol && (
                                <Category
                                    title="Alcohol Preference"
                                    name="alcohol"
                                    options={[
                                        { src: "Wine.svg", label: "Wine" },
                                        { src: "gin.svg", label: "Gin" },
                                        { src: "vodka.svg", label: "Vodka" },
                                        { src: "beer.svg", label: "Beer" },
                                    ]}
                                    control={control}
                                    error={errors.alcohol}
                                    gridCols="grid-cols-4"
                                    isMulti={false}
                                />
                            )}

                            {formConfig?.collectAccommodation && (
                                <>
                                    <AccommodationDates
                                        control={control}
                                        error={errors.accommodationDates}
                                        availableDates={availableAccommodationDates}
                                    />
                                    {formConfig.accommodationDetails && (
                                        <p className="text-sm text-gray-600 -mt-4">
                                            Note: {formConfig.accommodationDetails}
                                        </p>
                                    )}
                                </>
                            )}

                            {formConfig?.collectTransport && formConfig.transportDetails && (
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                    <h3 className="font-semibold text-gray-700 mb-2">
                                        Transport Information
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {formConfig.transportDetails}
                                    </p>
                                </div>
                            )}
                        </>
                    )}

                    {formConfig?.additionalNotes && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                            <p className="text-sm text-gray-700">{formConfig.additionalNotes}</p>
                        </div>
                    )}

                    <div className="w-full pt-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[#ef4444] hover:bg-[#dc2626] disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 rounded-xl font-bold text-lg md:text-xl transition-colors"
                        >
                            {isSubmitting ? "SAVING..." : "SAVE"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}