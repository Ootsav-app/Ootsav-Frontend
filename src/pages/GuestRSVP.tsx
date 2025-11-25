import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

import FormInput from "../components/FormInput.tsx";
import {
  type GuestRSVPFormData,
  type FormErrors,
  validateForm,
} from "../types/validation.ts";
import Category from "../components/categoryInput.tsx";
import AccommodationDetails from "../components/AccomodationDetails.tsx";
import CustomPhoneInput from "../components/PhoneInput.tsx";
import { getInviteDetails, submitRSVP } from "../services/api.ts";

export default function GuestRSVP() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inviteData, setInviteData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [paramError, setParamError] = useState<string>("");

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Safari-compatible parameter extraction
  const getParams = () => {
    // Safari bug fix: Parse URL manually from window.location.href
    const url = new URL(window.location.href);
    let eventId = url.searchParams.get("eventId");
    let groupId = url.searchParams.get("groupId");

    // Validate extracted params
    if (
      eventId &&
      groupId &&
      eventId !== "undefined" &&
      groupId !== "undefined" &&
      eventId !== "null" &&
      groupId !== "null"
    ) {
      return { eventId, groupId };
    }

    // Fallback to React Router searchParams
    eventId = searchParams.get("eventId");
    groupId = searchParams.get("groupId");

    if (
      eventId &&
      groupId &&
      eventId !== "undefined" &&
      groupId !== "undefined" &&
      eventId !== "null" &&
      groupId !== "null"
    ) {
      return { eventId, groupId };
    }

    return { eventId: null, groupId: null };
  };

  const { eventId, groupId } = getParams();

  useEffect(() => {
    // Re-extract parameters using Safari-compatible method
    const { eventId: currentEventId, groupId: currentGroupId } = getParams();

    if (!currentEventId || !currentGroupId) {
      console.error("Invalid RSVP parameters:", {
        eventId: currentEventId,
        groupId: currentGroupId,
        windowHref: window.location.href,
        userAgent: navigator.userAgent,
      });
      setParamError(
        "Missing required parameters. Please use a valid invite link."
      );
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setParamError("");

    getInviteDetails(currentEventId, currentGroupId)
      .then((res) => {
        const data: any = res.data;
        setInviteData(data);
      })
      .catch((error) => {
        console.error("Error loading invite details:", error);
        setParamError(
          "Unable to load invite details. Please check your invite link."
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [location.search]);

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
        alcohol: "",
        pickupLocation: "",
        pickupDateTime: "",
        dropoffLocation: "",
        dropoffDateTime: "",
      },
    });

  const rsvpStatus = watch("rsvp");
  const showRsvpOptions = rsvpStatus === "Attending" || rsvpStatus === "Maybe";

  const formConfig = inviteData?.rsvpPreferences?.formConfig;

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
      // Call the API to submit RSVP
      await submitRSVP(data, eventId!, groupId!);

      console.log("Form submitted successfully:", data);
      setErrors({});

      // Navigate based on RSVP status
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
        <div className="px-4 text-center text-white">
          <h2 className="mb-4 text-2xl font-bold">Invalid Invite Link</h2>
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
        <div className="text-xl text-white">Loading event details...</div>
      </div>
    );
  }

  if (formConfig && !formConfig.isRsvpAllowed) {
    return (
      <div className="flex items-center justify-center w-full min-h-screen bg-[#272938]">
        <div className="px-4 text-center text-white">
          <h2 className="mb-4 text-2xl font-bold">RSVP Closed</h2>
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
        <div className="flex items-center w-full max-w-2xl mb-4 text-white ">
          <button
            onClick={() =>
              navigate(`/invite/?eventId=${eventId}&groupId=${groupId}`)
            }
            className="flex items-center justify-center w-10 h-10 mr-3 transition-colors rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm"
            aria-label="Go back to invitation"
          >
            <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
          </button>
          <div className="flex flex-col">
            <span className="text-2xl font-light opacity-90">
              Event Overview
            </span>
          </div>
        </div>

        <div className="w-full max-w-2xl mb-6 text-white">
          <p className="text-base md:text-lg font-extralight">
            {"Please share these details to help us plan better!"}
          </p>
          {formConfig?.daysUntilLock && formConfig.daysUntilLock > 0 && (
            <p className="mt-2 text-sm font-semibold md:text-base">
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
                watch={watch}
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
                watch={watch}
                error={errors.email}
                placeholder="Email Id"
                type="email"
              />
            </div>

            <FormInput
              name="personalNote"
              register={register}
              watch={watch}
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
                  { src: "maybe.svg", label: "Maybe" },
                  { src: "cross.svg", label: "Not Attending" },
                ]}
                control={control}
                error={errors.rsvp}
                required
              />
            </div>
          )}

          {showRsvpOptions && (
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
                <div onClick={() => clearError("alcohol")}>
                  <Category
                    title="Alcohol Preference"
                    name="alcohol"
                    options={[
                      { src: "tick.svg", label: "Yes" },
                      { src: "cross.svg", label: "No" },
                    ]}
                    control={control}
                    error={errors.alcohol}
                    gridCols="grid-cols-2"
                    isMulti={false}
                  />
                </div>
              )}

              {formConfig?.collectAccommodation && (
                <>
                  <AccommodationDetails
                    register={register}
                    watch={watch}
                    errors={errors}
                    clearError={clearError}
                  />
                  {formConfig.accommodationDetails && (
                    <p className="-mt-4 text-sm text-gray-600">
                      Note: {formConfig.accommodationDetails}
                    </p>
                  )}
                </>
              )}

              {formConfig?.collectTransport && formConfig.transportDetails && (
                <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
                  <h3 className="mb-2 font-semibold text-gray-700">
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
            <div className="p-4 border border-yellow-200 rounded-lg bg-yellow-50">
              <p className="text-sm text-gray-700">
                {formConfig.additionalNotes}
              </p>
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
