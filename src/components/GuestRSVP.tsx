import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormInput from "./FormInput";
import {
  type GuestRSVPFormData,
  type FormErrors,
  validateForm,
} from "../types/validation";
import Category from "./categoryInput";
import AccommodationDates from "./AccomodationDates";
import CustomPhoneInput from "./PhoneInput";

export default function GuestRSVP() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

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

  return (
    <div className="flex flex-col items-center w-full min-h-screen pt-20 pb-10 bg-white">
      <div
        className="w-full h-full bg-cover bg-center bg-fixed bg-[#272938] fixed inset-0 "
        style={{ backgroundImage: 'url("back1.svg")' }}
      />

      <div className="relative z-10 flex flex-col items-center w-full px-4 md:px-8">
        <div className="flex items-center w-full max-w-2xl mb-2 text-white ">
          {/* Back Button - Temporarily commented */}
          {/*
          <button className="p-2 mr-3 transition-colors rounded-full bg-white/20 hover:bg-white/30">
            <GoArrowLeft className="w-6 h-6 md:w-7 md:h-7" />
          </button>
          */}
          <span className="text-xl font-medium md:text-3xl">
            Event Overview
          </span>
        </div>
        <p className="w-full max-w-2xl mb-6 text-xl text-white text-start md:text-xl">
          Please share these details to help us plan better!
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl min-w-[342px] mx-auto rounded-xl shadow-md px-4 py-6 md:px-10 md:pt-14 md:pb-4 space-y-8 bg-gradient-to-t from-[#fdcfc8] to-white"
        >
          {/* Personal Details */}
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

          {/* RSVP */}
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

          {isAttending && (
            <>
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

              <AccommodationDates
                control={control}
                error={errors.accommodationDates}
              />
            </>
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
