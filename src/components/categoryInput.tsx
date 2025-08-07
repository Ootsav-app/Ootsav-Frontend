import { Controller } from "react-hook-form";
import type { Control } from "react-hook-form";
import type { GuestRSVPFormData } from "../types/validation";

type Option = { src: string; label: string };

interface CategoryProps {
  title: string;
  name: keyof GuestRSVPFormData;
  options: Option[];
  control: Control<GuestRSVPFormData>;
  error?: string;
  gridCols?: string;
  isMulti?: boolean;
  required?: boolean;
}

export default function Category({
  title,
  name,
  options,
  control,
  error,
  gridCols = "grid-cols-3",
  isMulti = false,
  required = false,
}: CategoryProps) {
  return (
    <div className="relative z-10">
      <h2 className="mb-2 text-lg font-semibold text-gray-700">
        {title}
        {required && <span className="ml-1 text-red-500">*</span>}
      </h2>
      <Controller
        control={control}
        name={name as any}
        render={({ field: { onChange, value } }) => (
          <div className={`grid ${gridCols} gap-3`}>
            {options.map(({ src, label }) => {
              const isSelected = isMulti
                ? Array.isArray(value) && value.includes(label)
                : value === label;

              const handleClick = () => {
                if (isMulti) {
                  const currentArray = Array.isArray(value) ? value : [];
                  const newValue = currentArray.includes(label)
                    ? currentArray.filter((item) => item !== label)
                    : [...currentArray, label];
                  onChange(newValue);
                } else {
                  onChange(value === label ? "" : label);
                }
              };

              return (
                <div
                  key={label}
                  onClick={handleClick}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 ${
                    isSelected ? "border-red-500 bg-red-50" : "border-gray-300"
                  } bg-white text-sm cursor-pointer  transition-colors`}
                >
                  <img
                    src={src}
                    alt={label}
                    className={`${
                      label === "Anything" ? "w-6 h-6" : "w-5 h-5"
                    } mb-2 md:w-7 md:h-7`}
                  />
                  <span className="w-full text-sm text-center md:text-base whitespace-nowrap">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      />
      {error && <p className="px-1 mt-2 text-xs text-red-500">{error}</p>}
    </div>
  );
}
