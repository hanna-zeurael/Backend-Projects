import fs from 'fs';
import path from 'path';
import validator from 'validator';

const filePath = './data/users.txt';
const outputFile = path.join('./output/validUsers.txt');

function isValidNamePart(part) {
  return /^[A-Z][a-z]+$/.test(part);
}

function isValidPhone(phone) {
  return /^\+\d{8,}$/.test(phone);
}

function validateLine(line) {
  const parts = line.trim().split(/\s+/);
  if (parts.length < 3) return false;

  const nameParts = parts[0].split('_');
  const email = parts[1];
  const phone = parts[2];

  if (nameParts.length < 2) return false;
  const [firstName, lastName] = nameParts;

  return (
    isValidNamePart(firstName) &&
    isValidNamePart(lastName) &&
    validator.isEmail(email) &&
    isValidPhone(phone)
  );
}

function processFile() {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const lines = data.trim().split('\n');
    const validUsers = [];

    for (const line of lines) {
      const parts = line.trim().split(/\s+/);
      const nameParts = parts[0].split('_');
      const email = parts[1];
      const phone = parts[2];

      if (validateLine(line)) {
        const [firstName, lastName] = nameParts;
        validUsers.push(`${firstName} ${lastName} ${email} ${phone}`);
      }
    }

    fs.writeFileSync(outputFile, validUsers.join('\n\n'), 'utf-8');
    console.log(`Done. ${validUsers.length} valid users written to ${outputFile}`);
  } catch (err) {
    console.error('Error processing file:', err.message);
  }
}

processFile();
