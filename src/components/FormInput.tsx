import type { UseFormRegister, UseFormWatch } from "react-hook-form";
import type { GuestRSVPFormData } from "../types/validation";

interface FormInputProps {
  name: keyof GuestRSVPFormData;
  register: UseFormRegister<GuestRSVPFormData>;
  watch?: UseFormWatch<GuestRSVPFormData>;
  error?: string;
  placeholder: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
  rows?: number;
}

export default function FormInput({
  name,
  register,
  watch,
  error,
  placeholder,
  type = "text",
  required = false,
  rows,
}: FormInputProps) {
  const value = watch ? watch(name) : "";
  const hasValue = !!value;
  const borderColor = error ? "border-red-500" : "border-gray-300";
  const labelText = `${placeholder}${required ? "*" : ""}`;

  const labelClasses = `
    absolute left-4 
    transition-all duration-200 
    bg-white px-1 pointer-events-none
    text-sm text-gray-400 
    peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm
    peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-red-500
    ${hasValue ? "top-[-13px] text-xs text-red-500" : ""}
  `;

  if (rows) {
    return (
      <div className="relative mb-5">
        <textarea
          {...register(name)}
          rows={rows}
          placeholder=" " 
          className={`peer w-full px-4 py-3 border rounded-xl text-sm md:text-base bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none ${borderColor}`}
        />
        <label htmlFor={name} className={labelClasses}>
          {labelText}
        </label>
        {error && <p className="px-1 mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  }

  return (
    <div className="relative mb-5">
      <input
        {...register(name)}
        type={type}
        placeholder=" "
        className={`peer w-full px-4 py-3 border rounded-xl text-sm md:text-base bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent ${borderColor}`}
      />
      <label htmlFor={name} className={labelClasses}>
        {labelText}
      </label>
      {error && <p className="px-1 mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
