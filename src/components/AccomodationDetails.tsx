import type { UseFormRegister, UseFormWatch } from "react-hook-form";
import type { GuestRSVPFormData, FormErrors } from "../types/validation";
import FormInput from "./FormInput";

interface AccommodationDetailsProps {
    register: UseFormRegister<GuestRSVPFormData>;
    watch: UseFormWatch<GuestRSVPFormData>;
    errors: FormErrors;
    clearError: (fieldName: keyof FormErrors) => void;
}

export default function AccommodationDetails({
                                                 register,
                                                 watch,
                                                 errors,
                                                 clearError,
                                             }: AccommodationDetailsProps) {
    return (
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
                        <input
                            {...register("pickupDateTime")}
                            type="datetime-local"
                            className={`peer w-full px-4 py-3 border rounded-xl text-sm md:text-base bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                                errors.pickupDateTime ? "border-red-500" : "border-gray-300"
                            }`}
                        />
                        <label
                            className="absolute left-4 -top-2.5 bg-white px-1 text-xs text-gray-500 pointer-events-none"
                        >
                            Pickup Date & Time
                        </label>
                        {errors.pickupDateTime && (
                            <p className="px-1 mt-1 text-xs text-red-500">{errors.pickupDateTime}</p>
                        )}
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
                        <input
                            {...register("dropoffDateTime")}
                            type="datetime-local"
                            className={`peer w-full px-4 py-3 border rounded-xl text-sm md:text-base bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                                errors.dropoffDateTime ? "border-red-500" : "border-gray-300"
                            }`}
                        />
                        <label
                            className="absolute left-4 -top-2.5 bg-white px-1 text-xs text-gray-500 pointer-events-none"
                        >
                            Dropoff Date & Time
                        </label>
                        {errors.dropoffDateTime && (
                            <p className="px-1 mt-1 text-xs text-red-500">{errors.dropoffDateTime}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}