import { useState } from "react";
import { DateTimePicker } from "@mantine/dates";
import { MantineProvider } from "@mantine/core";
import type {
  UseFormRegister,
  UseFormWatch,
  UseFormSetValue,
} from "react-hook-form";
import type { GuestRSVPFormData, FormErrors } from "../types/validation";
import FormInput from "./FormInput";
import dayjs from "dayjs";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

interface AccommodationDetailsProps {
  register: UseFormRegister<GuestRSVPFormData>;
  watch: UseFormWatch<GuestRSVPFormData>;
  setValue: UseFormSetValue<GuestRSVPFormData>;
  errors: FormErrors;
  clearError: (fieldName: keyof FormErrors) => void;
  eventStartDate?: string;
  eventEndDate?: string;
}

export default function AccommodationDetails({
  register,
  watch,
  setValue,
  errors,
  clearError,
  eventStartDate,
  eventEndDate,
}: AccommodationDetailsProps) {
  const [pickupDateTime, setPickupDateTime] = useState<string | null>(null);
  const [dropoffDateTime, setDropoffDateTime] = useState<string | null>(null);

  // Calculate shared date range for both pickup and dropoff (1 day before event start to 1 day after event end)
  const getDateRange = () => {
    if (!eventStartDate || !eventEndDate)
      return { minDate: undefined, maxDate: undefined };

    const startDate = dayjs(eventStartDate);
    const endDate = dayjs(eventEndDate);
    const minDate = startDate.subtract(2, "day").format("YYYY-MM-DD");
    const maxDate = endDate.add(2, "day").format("YYYY-MM-DD");

    return { minDate, maxDate };
  };

  const dateRange = getDateRange();

  // Dynamic min date for dropoff based on pickup selection
  const getDropoffMinDate = () => {
    if (pickupDateTime) {
      return dayjs(pickupDateTime).format("YYYY-MM-DD");
    }
    return dateRange.minDate;
  };

  const handlePickupChange = (value: string | null) => {
    setPickupDateTime(value);
    if (value) {
      setValue("pickupDateTime", dayjs(value).format("YYYY-MM-DDTHH:mm"));
    } else {
      setValue("pickupDateTime", "");
    }
  };

  const handleDropoffChange = (value: string | null) => {
    setDropoffDateTime(value);
    if (value) {
      setValue("dropoffDateTime", dayjs(value).format("YYYY-MM-DDTHH:mm"));
    } else {
      setValue("dropoffDateTime", "");
    }
  };

  return (
    <MantineProvider>
      <style>{`
        /* Mantine DateTimePicker Custom Styling */
        .mantine-DateTimePicker-input {
          border: 1px solid #d1d5db !important;
          border-radius: 0.75rem !important;
          padding: 0.75rem 1rem !important;
          font-size: 0.875rem !important;
          transition: all 0.2s !important;
        }
        
        @media (min-width: 768px) {
          .mantine-DateTimePicker-input {
            font-size: 1rem !important;
          }
        }
        
        .mantine-DateTimePicker-input:hover {
          border-color: #9ca3af !important;
        }
        
        .mantine-DateTimePicker-input:focus {
          outline: none !important;
          border-color: transparent !important;
          box-shadow: 0 0 0 2px #ef4444 !important;
        }
        
        .mantine-DateTimePicker-input[data-error] {
          border-color: #ef4444 !important;
        }
        
        .mantine-DateTimePicker-label {
          color: #4b5563 !important;
          font-weight: 500 !important;
          font-size: 0.75rem !important;
          margin-bottom: 0.25rem !important;
        }
        
        .mantine-DateTimePicker-error {
          color: #ef4444 !important;
          font-size: 0.75rem !important;
          font-weight: 500 !important;
          margin-top: 0.25rem !important;
        }
        
        /* Calendar styling */
        .mantine-DateTimePicker-dropdown {
          border: 2px solid #e5e7eb !important;
          border-radius: 0.75rem !important;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
        }
        
        /* Selected date background */
        .mantine-DateTimePicker-day[data-selected] {
          background-color: #ef4444 !important;
          color: white !important;
        }
        
        .mantine-DateTimePicker-day[data-selected]:hover {
          background-color: #dc2626 !important;
        }
        
        /* Today's date */
        .mantine-DateTimePicker-day[data-today] {
          border: 2px solid #ef4444 !important;
        }
        
        /* Hover state for days */
        .mantine-DateTimePicker-day:hover {
          background-color: #fee2e2 !important;
        }
        
        /* Time input styling - DateTimePicker timeInput */
        // .mantine-DateTimePicker-timeInput input {
        //   border: none !important;
        //   border-radius: 0.375rem !important;
        //   padding: 0.5rem 0.75rem !important;
        //   transition: all 0.2s !important;
        //   font-size: 0.875rem !important;
        //   background-color: transparent !important;
        //   color: #1f2937 !important;
        }
        
        .mantine-DateTimePicker-timeInput input:hover {
          background-color: #f3f4f6 !important;
        }
        
        // .mantine-DateTimePicker-timeInput input:focus {
        //   background-color: #fee2e2 !important;
        //   color: #1f2937 !important;
        //   outline: none !important;
        //   box-shadow: 0 0 0 2px #ef4444 !important;
        // }
        
        /* Remove borders from time input sections */
        .mantine-DateTimePicker-timeInput > div {
          border: none !important;
        }
        
        /* AM/PM selector styling */
        .mantine-DateTimePicker-timeInput button {
          border: none !important;
          background-color: transparent !important;
          border-radius: 0.375rem !important;
          transition: all 0.2s !important;
          color: #374151 !important;
        }
        
        .mantine-DateTimePicker-timeInput button:hover {
          background-color: #fee2e2 !important;
          color: #991b1b !important;
        }
        
        .mantine-DateTimePicker-timeInput button[data-selected="true"],
        .mantine-DateTimePicker-timeInput button[aria-pressed="true"] {
          background-color: #ef4444 !important;
          color: white !important;
          font-weight: 500 !important;
        }
        
        // /* Arrow icons inherit text color */
        // .mantine-TimeInput-dropdown button svg,
        // .mantine-DateTimePicker-timeInput svg {
        //   color: currentColor !important;
        // }
        
        /* Time wrapper styling */
        .mantine-DateTimePicker-timeWrapper {
          padding: 0.75rem !important;
          border-top: 1px solid #e5e7eb !important;
        }
        
        /* Submit button styling */
        .mantine-DateTimePicker-submitButton {
          background-color: #ef4444 !important;
          color: white !important;
          border-radius: 0.5rem !important;
          font-weight: 500 !important;
          transition: all 0.2s !important;
        }
        
        .mantine-DateTimePicker-submitButton:hover {
          background-color: #dc2626 !important;
        }
        
        .mantine-DateTimePicker-submitButton:active {
          background-color: #b91c1c !important;
        }
        
        /* Time picker dropdown (for time selection) */
        .mantine-TimeInput-dropdown {
          border: none !important;
          border-radius: 0.5rem !important;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
          max-height: 200px !important;
          overflow-y: auto !important;
          padding: 0.25rem !important;
        }
        
        /* Custom scrollbar styling */
        .mantine-TimeInput-dropdown::-webkit-scrollbar {
          width: 6px;
        }
        
        .mantine-TimeInput-dropdown::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 3px;
        }
        
        .mantine-TimeInput-dropdown::-webkit-scrollbar-thumb {
          background: #ef4444;
          border-radius: 3px;
        }
        
        .mantine-TimeInput-dropdown::-webkit-scrollbar-thumb:hover {
          background: #dc2626;
        }
        
        /* Time picker options */
        .mantine-TimeInput-option {
          border: none !important;
          border-radius: 0.375rem !important;
          margin: 0.125rem 0 !important;
          padding: 0.5rem 0.75rem !important;
          transition: all 0.15s !important;
          cursor: pointer !important;
        }
        
        .mantine-TimeInput-option:hover {
          background-color: #fee2e2 !important;
          color: #991b1b !important;
        }
        
        .mantine-TimeInput-option[data-selected],
        .mantine-TimeInput-option[aria-selected="true"] {
          background-color: #ef4444 !important;
          color: white !important;
          font-weight: 500 !important;
        }
        
        .mantine-TimeInput-option[data-selected]:hover,
        .mantine-TimeInput-option[aria-selected="true"]:hover {
          background-color: #dc2626 !important;
        }
        
        /* Dropdown arrow icon - white when item selected */
        .mantine-TimeInput-option[data-selected] svg,
        .mantine-TimeInput-option[aria-selected="true"] svg {
          color: white !important;
        }
        
        /* Calendar header */
        .mantine-DateTimePicker-calendarHeader {
          margin-bottom: 1rem !important;
        }
        
        .mantine-DateTimePicker-calendarHeaderControl:hover {
          background-color: #fee2e2 !important;
        }
        
        /* Weekday labels */
        .mantine-DateTimePicker-weekday {
          color: #6b7280 !important;
          font-weight: 600 !important;
        }
      `}</style>

      <div className="w-full">
        <h2 className="pl-2 mb-4 text-lg font-semibold text-gray-700">
          Accommodation Required
        </h2>

        <div className="space-y-4">
          <div onClick={() => clearError("pickupLocation")}>
            <FormInput
              name="pickupLocation"
              register={register}
              watch={watch}
              error={errors.pickupLocation}
              placeholder="Pickup Location"
            />
          </div>

          <div onClick={() => clearError("pickupDateTime")}>
            <div className="relative mb-5">
              <DateTimePicker
                value={pickupDateTime}
                onChange={handlePickupChange}
                label="Pickup Date & Time"
                placeholder="Select date and time"
                minDate={dateRange.minDate}
                maxDate={dateRange.maxDate}
                clearable
                error={errors.pickupDateTime}
                valueFormat="DD MMM YYYY hh:mm A"
                timePickerProps={{
                  withDropdown: true,
                  popoverProps: { withinPortal: false },
                  format: "12h",
                }}
                classNames={{
                  input: "mantine-DateTimePicker-input",
                  label: "mantine-DateTimePicker-label",
                  error: "mantine-DateTimePicker-error",
                }}
              />
            </div>
          </div>

          <div onClick={() => clearError("dropoffLocation")}>
            <FormInput
              name="dropoffLocation"
              register={register}
              watch={watch}
              error={errors.dropoffLocation}
              placeholder="Dropoff Location"
            />
          </div>

          <div onClick={() => clearError("dropoffDateTime")}>
            <div className="relative mb-5">
              <DateTimePicker
                value={dropoffDateTime}
                onChange={handleDropoffChange}
                label="Dropoff Date & Time"
                placeholder="Select date and time"
                minDate={getDropoffMinDate()}
                maxDate={dateRange.maxDate}
                clearable
                error={errors.dropoffDateTime}
                valueFormat="DD MMM YYYY hh:mm A"
                timePickerProps={{
                  withDropdown: true,
                  popoverProps: { withinPortal: false },
                  format: "12h",
                }}
                classNames={{
                  input: "mantine-DateTimePicker-input",
                  label: "mantine-DateTimePicker-label",
                  error: "mantine-DateTimePicker-error",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </MantineProvider>
  );
}
