// types/validation.ts
export interface GuestRSVPFormData {
  name: string;
  phone: string;
  email: string;
  personalNote: string;
  rsvp: "Attending" | "Not Attending" | "Maybe" | "";
  guest: string;
  food: string;
  alcohol: string;
  accommodationDates: string[];
}

export interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  personalNote?: string;
  rsvp?: string;
  guest?: string;
  food?: string;
  alcohol?: string;
  accommodationDates?: string;
}

export const validateForm = (data: GuestRSVPFormData): FormErrors => {
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

  // RSVP is required
  if (!data.rsvp) {
    errors.rsvp = "RSVP status is required";
  }

  // Conditional validation for attending guests
  if (data.rsvp === "Attending") {
    if (!data.guest) {
      errors.guest = "Guest count is required when attending";
    }

    if (!data.food) {
      errors.food = "Food preference is required when attending";
    }
  }

  return errors;
};
