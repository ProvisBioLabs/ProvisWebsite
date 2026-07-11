// ─── Input Sanitization & Validation ────────────────────────────────

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  interest: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: string[];
  sanitized: ContactFormData;
}

/** Strip HTML tags and trim whitespace */
function sanitizeInput(str: unknown): string {
  if (typeof str !== "string") return "";
  return str
    .replace(/<[^>]*>/g, "")   // strip HTML tags
    .replace(/&[^;]+;/g, "")   // strip HTML entities
    .trim();
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+\d\s\-().]{7,20}$/;

const VALID_INTERESTS = [
  "Bio-APIs",
  "Recombinant Bio-Reagents",
  "CDMO Services",
  "Custom Peptide Synthesis",
  "Partnership",
  "Provinase Enquiry",
  "Other",
];

export function validateContactForm(raw: Record<string, unknown>): ValidationResult {
  const errors: string[] = [];

  const firstName = sanitizeInput(raw.firstName);
  const lastName = sanitizeInput(raw.lastName);
  const email = sanitizeInput(raw.email);
  const phone = sanitizeInput(raw.phone);
  const interest = sanitizeInput(raw.interest);
  const message = sanitizeInput(raw.message);
  if (!firstName || firstName.length < 1) errors.push("First name is required");
  if (!lastName || lastName.length < 1) errors.push("Last name is required");

  if (!email) {
    errors.push("Email is required");
  } else if (!EMAIL_REGEX.test(email)) {
    errors.push("Invalid email address");
  }

  if (phone && !PHONE_REGEX.test(phone)) {
    errors.push("Invalid phone number format");
  }

  if (!interest) {
    errors.push("Area of interest is required");
  } else if (!VALID_INTERESTS.includes(interest)) {
    errors.push("Invalid area of interest");
  }

  if (!message) errors.push("Message is required");
  if (message.length > 5000) errors.push("Message is too long (max 5000 characters)");

  return {
    valid: errors.length === 0,
    errors,
    sanitized: { firstName, lastName, email, phone, interest, message },
  };
}
