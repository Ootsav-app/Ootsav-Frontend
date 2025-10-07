import { Controller } from "react-hook-form";
import type { Control } from "react-hook-form";
import type { GuestRSVPFormData } from "../types/validation";

const formatDateWithOrdinal = (date: Date): string => {
    const day = date.getDate();
    if (day > 3 && day < 21) return `${day}th`;
    switch (day % 10) {
        case 1: return `${day}st`;
        case 2: return `${day}nd`;
        case 3: return `${day}rd`;
        default: return `${day}th`;
    }
};

interface AccommodationDatesProps {
    control: Control<GuestRSVPFormData>;
    error?: string;
    availableDates: Date[];
}

export default function AccommodationDates({
                                               control,
                                               error,
                                               availableDates,
                                           }: AccommodationDatesProps) {

    // Generate the date strings from the availableDates prop
    const dateOptions = availableDates.map(formatDateWithOrdinal);

    const selectDateRange = (startDay: string, endDay: string, dateOptions: string[]): string[] => {
        const startIndex = dateOptions.indexOf(startDay);
        const endIndex = dateOptions.indexOf(endDay);

        if (startIndex === -1 || endIndex === -1) return [];

        const minIndex = Math.min(startIndex, endIndex);
        const maxIndex = Math.max(startIndex, endIndex);

        return dateOptions.slice(minIndex, maxIndex + 1);
    };

    return (
        <div className="w-full">
            <h2 className="pl-2 mb-2 text-lg font-semibold text-gray-700">
                Accommodation Required
            </h2>

            <Controller
                control={control}
                name="accommodationDates"
                render={({ field: { onChange, value } }) => {
                    const selectedDates = Array.isArray(value) ? value : [];

                    const handleClick = (day: string) => {
                        if (selectedDates.length === 0) {
                            // First selection
                            onChange([day]);
                        } else if (selectedDates.length === 1) {
                            // Second selection - create range
                            const rangeSelection = selectDateRange(selectedDates[0], day, dateOptions);
                            onChange(rangeSelection);
                        } else {
                            // Reset and start new selection
                            onChange([day]);
                        }
                    };

                    return (
                        <div className="grid grid-cols-5 gap-2 px-2">
                            {dateOptions.map((day) => {
                                const isSelected = selectedDates.includes(day);

                                return (
                                    <div
                                        key={day}
                                        onClick={() => handleClick(day)}
                                        className={`relative flex flex-col items-center justify-center px-8 py-6 rounded-xl border-2 cursor-pointer transition-colors ${
                                            isSelected
                                                ? "border-red-500 bg-red-50"
                                                : "border-gray-300 bg-white"
                                        }`}
                                    >
                                        <div
                                            className="absolute bg-center bg-no-repeat bg-contain w-13 h-13 top-1 left-1 sm:w-13 sm:h-13 md:w-15 md:h-15"
                                            style={{ backgroundImage: 'url("date.svg")' }}
                                        />
                                        <span className="mt-5 text-center text-sm sm:text-lg font-medium">
                                            {day} Aug
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    );
                }}
            />
            {error && <p className="px-1 mt-2 text-xs text-red-500">{error}</p>}
            <p className="px-2 mt-2 text-xs text-gray-500">
                Click on a date to start selection. Click on another date to select the range between them.
            </p>
        </div>
    );
}
