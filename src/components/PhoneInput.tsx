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
        render={({ field: { onChange, value, ref } }) => (
          <div
            className={`flex items-center w-full rounded-xl border px-4 py-3 text-sm md:text-base transition duration-200 focus-within:outline-none bg-white ${
              error
                ? "border-red-500 focus-within:ring-2 focus-within:ring-red-500"
                : "border-gray-300 focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500"
            }`}
          >
            <PhoneInput
              international
              defaultCountry="US"
              value={value}
              onChange={onChange}
              inputComponent={({ ...props }) => (
                <input
                  {...props}
                  ref={ref}
                  className="flex-1 bg-transparent border-none outline-none"
                />
              )}
              className="flex items-center w-full"
            />
          </div>
        )}
      />
      {error && <p className="px-1 mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
