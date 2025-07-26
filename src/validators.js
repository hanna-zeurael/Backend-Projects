import validator from 'validator';

export function isValidName(name) {
  return /^[A-Za-z]+ [A-Za-z]+$/.test(name);
}

export function isValidEmail(email) {
  return validator.isEmail(email);
}

export function isValidPhone(phone) {
  return /^\+\d{10,15}$/.test(phone); // Accepts all E.164 formatted numbers
}

