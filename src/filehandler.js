import fs from 'fs';

export function readUsersFromFile(filePath) {
  const data = fs.readFileSync(filePath, 'utf-8');
  return data.split('\n').filter(line => line.trim() !== '');
}

export function writeValidUsersToFile(filePath, users) {
  fs.writeFileSync(filePath, users.join('\n'), 'utf-8');
}
