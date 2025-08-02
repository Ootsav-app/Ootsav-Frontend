import type { UseFormRegister } from "react-hook-form";
import type { GuestRSVPFormData } from "../types/validation";

interface FormInputProps {
  name: keyof GuestRSVPFormData;
  register: UseFormRegister<GuestRSVPFormData>;
  error?: string;
  placeholder: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
  rows?: number;
}

const inputStyle =
  "w-full mb-1 px-4 py-3 border rounded-xl text-sm md:text-base bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent";

const textareaStyle =
  "w-full mb-1 px-4 py-3 border rounded-xl text-sm md:text-base bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none";

export default function FormInput({
  name,
  register,
  error,
  placeholder,
  type = "text",
  required = false,
  rows,
}: FormInputProps) {
  const borderColor = error ? "border-red-500" : "border-gray-300";

  if (rows) {
    return (
      <div className="mb-3">
        <textarea
          {...register(name as any)}
          placeholder={placeholder}
          rows={rows}
          className={`${textareaStyle} ${borderColor}`}
        />
        {error && <p className="px-1 mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  }

  return (
    <div className="mb-3">
      <input
        {...register(name as any)}
        type={type}
        placeholder={`${placeholder}${required ? "*" : ""}`}
        className={`${inputStyle} ${borderColor}`}
      />
      {error && <p className="px-1 mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
