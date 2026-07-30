/**
 * ==========================================================
 * ADCMS - Helper Functions
 * Version : 0.2
 * ==========================================================
 */

/**
 * Returns true if value is blank.
 */
function isBlank(value) {
  return value === null ||
         value === undefined ||
         value === "";
}

/**
 * Remove spaces and keep only digits.
 */
function normalizeMobile(mobile) {

  if (isBlank(mobile)) return "";

  return String(mobile)
    .replace(/\D/g, "");
}

/**
 * Proper case patient name.
 */
function formatPatientName(name) {

  if (isBlank(name)) return "";

  return String(name)
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, c => c.toUpperCase());

}

/**
 * Calculate current age from DOB.
 */
function calculateAge(dob) {

  if (!dob) return "";

  const today = new Date();

  const birth = new Date(dob);

  let age = today.getFullYear() - birth.getFullYear();

  const month = today.getMonth() - birth.getMonth();

  if (
      month < 0 ||
      (month === 0 && today.getDate() < birth.getDate())
  ) {
      age--;
  }

  return age;

}