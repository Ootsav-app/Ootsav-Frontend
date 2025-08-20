import { Controller } from "react-hook-form";
import type { Control} from "react-hook-form";
import type { GuestRSVPFormData } from "../types/validation";

interface AccommodationDatesProps {
  control: Control<GuestRSVPFormData>;
  error?: string | undefined;
}

const dates = ["25th", "26th", "27th", "28th", "29th"];

export default function AccommodationDates({
  control,
  error,
}: AccommodationDatesProps) {
  return (
    <div className="w-full">
      <h2 className="pl-2 mb-2 text-lg font-semibold text-gray-700">
        Accommodation Required
      </h2>

      <Controller
        control={control}
        name="accommodationDates"
        render={({ field: { onChange, value } }) => (
          <div className="grid grid-cols-5 gap-2 px-2">
            {dates.map((day) => {
              const isSelected = Array.isArray(value) && value.includes(day);

              const handleClick = () => {
                const currentArray = Array.isArray(value) ? value : [];
                const newValue = currentArray.includes(day)
                  ? currentArray.filter((date) => date !== day)
                  : [...currentArray, day];
                onChange(newValue);
              };

              return (
                <div
                  key={day}
                  onClick={handleClick}
                  className={`relative flex flex-col items-center justify-center px-8 py-6 rounded-xl border-2 ${
                    isSelected ? "border-red-500 bg-red-50" : "border-gray-300"
                  } text-[10px] sm:text-xs md:text-sm bg-white cursor-pointer  transition-colors`}
                >
                  <div
                    className="absolute bg-center bg-no-repeat bg-contain w-13 h-13 top-1 left-1 sm:w-13 sm:h-13 md:w-15 md:h-15"
                    style={{ backgroundImage: 'url("date.svg")' }}
                  />

                  <span className="mt-5 text-[10px] sm:text-lg text-center font-medium">
                    {day} Aug
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
