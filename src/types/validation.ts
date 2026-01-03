export interface GuestRSVPFormData {
  name: string;
  phone: string;
  email: string;
  personalNote: string;
  rsvp: "Attending" | "Not Attending" | "Maybe" | "";
  guest: string;
  familyMembers?: string;
  food: string;
  alcohol: string;
  pickupLocation: string;
  pickupDateTime: string;
  dropoffLocation: string;
  dropoffDateTime: string;
}

export interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  personalNote?: string;
  rsvp?: string;
  guest?: string;
  familyMembers?: string;
  food?: string;
  alcohol?: string;
  pickupLocation?: string;
  pickupDateTime?: string;
  dropoffLocation?: string;
  dropoffDateTime?: string;
}

export interface FormConfig {
  collectAttendance?: boolean;
  collectGuestCount?: boolean;
  collectFood?: boolean;
  collectAlcohol?: boolean;
  collectAccommodation?: boolean;
  collectTransport?: boolean;
  isRsvpAllowed?: boolean;
}

export const validateForm = (
  data: GuestRSVPFormData,
  formConfig?: FormConfig
): FormErrors => {
  const errors: FormErrors = {};

  // Required fields
  if (!data.name.trim()) {
    errors.name = "Name is required";
  }

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (data.phone.length < 5) {
    errors.phone = "Invalid phone number";
  }

  // Email validation (optional but must be valid if provided)
  if (data.email && data.email.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.email = "Invalid email format";
    }
  }

  // RSVP is required only if collectAttendance is enabled
  if (formConfig?.collectAttendance && !data.rsvp) {
    errors.rsvp = "RSVP status is required";
  }

  // Conditional validation for attending guests based on formConfig
  if (data.rsvp === "Attending" || data.rsvp === "Maybe") {
    if (formConfig?.collectGuestCount && !data.guest) {
      errors.guest = "Guest count is required";
    }

    if (formConfig?.collectFood && !data.food) {
      errors.food = "Food preference is required";
    }

    if (formConfig?.collectAlcohol && !data.alcohol) {
      errors.alcohol = "Alcohol preference is required";
    }
  }

  return errors;
};
