import { Controller } from "react-hook-form";
import type { Control } from "react-hook-form";
import type { GuestRSVPFormData } from "../types/validation";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface PhoneInputProps {
  control: Control<GuestRSVPFormData>;
  error?: string;
}

export default function CustomPhoneInput({ control, error }: PhoneInputProps) {
  return (
    <div className="mb-3">
      <Controller
        control={control}
        name="phone"
        render={({ field: { onChange, value } }) => (
          <div
            className={`rounded-xl p-4 overflow-hidden transition duration-200 bg-white ${
              error
                ? "border border-red-500 ring-2 ring-red-500"
                : "border border-gray-300 focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500"
            }`}
          >
            <PhoneInput
              international
              defaultCountry="IN"
              value={value}
              onChange={onChange}
              className="w-full text-sm PhoneInput md:text-base"
            />
          </div>
        )}
      />
      {error && <p className="px-1 mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
