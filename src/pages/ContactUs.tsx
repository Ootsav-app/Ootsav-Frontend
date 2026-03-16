import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";

import "react-phone-number-input/style.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface ContactFormData {
  phone: string;
  supportMessage: string;
}

const ContactUs = () => {
  const [submitState, setSubmitState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState<string>("");

  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      phone: "",
      supportMessage: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setSubmitState("error");
      setFeedback(
        "Contact form is not configured yet. Please add Web3Forms environment variables.",
      );
      return;
    }

    try {
      setSubmitState("submitting");
      setFeedback("");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: "Ootsav Contact Form",
          subject: "New support message from Ootsav website",
          to_email: "admin@ootsav.in",
          phone_number: data.phone,
          support_message: data.supportMessage,
          submitted_at: new Date().toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short",
          }),
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Web3Forms submission failed");
      }

      setSubmitState("success");
      setFeedback(
        "Support request sent successfully. Our team will contact you soon.",
      );
      reset();
    } catch (error) {
      console.error("Error sending support request:", error);
      setSubmitState("error");
      setFeedback(
        "Failed to send support request. Please try again in a moment.",
      );
    }
  };

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-gray-50 darker-grotesque">
      <div className="relative w-full overflow-hidden bg-[radial-gradient(circle_at_top,_#ffe5d7_0%,_#f8fbff_50%,_#ffffff_100%)]">
        <div className="mx-auto max-w-7xl">
          <Navbar />
        </div>

        <main className="relative px-4 pt-2 pb-16 sm:px-6 md:pb-20 lg:px-8">
          <div className="mx-auto w-full max-w-2xl rounded-3xl border border-[#f5cec7] bg-white/90 p-5 shadow-[0_20px_60px_rgba(239,84,79,0.12)] backdrop-blur-sm sm:p-8 md:p-10">
            <p className="mb-2 text-sm font-semibold tracking-wide text-[#ef544f] uppercase">
              Contact Us
            </p>
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Need Help? We Are Here.
            </h1>
            <p className="mt-3 text-base text-gray-600 sm:text-lg">
              Share your phone number and support message. We will reach out as
              soon as possible.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 space-y-5"
              noValidate
            >
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-800">
                  Phone Number
                </label>
                <Controller
                  control={control}
                  name="phone"
                  rules={{
                    required: "Phone number is required",
                    validate: (value) =>
                      (value?.replace(/\D/g, "").length ?? 0) >= 8 ||
                      "Please enter a valid phone number",
                  }}
                  render={({ field: { value, onChange } }) => (
                    <div
                      className={`rounded-xl border bg-white px-4 py-3 transition-all ${
                        errors.phone
                          ? "border-red-500 ring-2 ring-red-200"
                          : "border-gray-300 focus-within:border-[#ef544f] focus-within:ring-2 focus-within:ring-[#ef544f]/20"
                      }`}
                    >
                      <PhoneInput
                        international
                        defaultCountry="IN"
                        value={value}
                        onChange={(phoneValue) => onChange(phoneValue ?? "")}
                        className="w-full text-sm md:text-base"
                      />
                    </div>
                  )}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs font-medium text-red-600">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="support-message"
                  className="block mb-2 text-sm font-semibold text-gray-800"
                >
                  Support Message
                </label>
                <textarea
                  id="support-message"
                  rows={5}
                  placeholder="Tell us what you need help with..."
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-all md:text-base ${
                    errors.supportMessage
                      ? "border-red-500 ring-2 ring-red-200"
                      : "border-gray-300 focus:border-[#ef544f] focus:ring-2 focus:ring-[#ef544f]/20"
                  }`}
                  {...register("supportMessage", {
                    required: "Support message is required",
                    minLength: {
                      value: 10,
                      message: "Please provide at least 10 characters",
                    },
                  })}
                />
                {errors.supportMessage && (
                  <p className="mt-1 text-xs font-medium text-red-600">
                    {errors.supportMessage.message}
                  </p>
                )}
              </div>

              {feedback && (
                <div
                  className={`rounded-xl px-4 py-3 text-sm font-medium ${
                    submitState === "success"
                      ? "border border-green-200 bg-green-50 text-green-800"
                      : "border border-red-200 bg-red-50 text-red-700"
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {feedback}
                </div>
              )}

              <button
                type="submit"
                disabled={submitState === "submitting"}
                className="w-full rounded-xl bg-[#ef544f] px-5 py-3 text-base font-bold tracking-wide text-white transition-colors hover:bg-[#dc2626] disabled:cursor-not-allowed disabled:bg-gray-400"
              >
                {submitState === "submitting"
                  ? "SENDING..."
                  : "SUBMIT SUPPORT REQUEST"}
              </button>
            </form>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
