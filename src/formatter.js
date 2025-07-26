export function formatUser(name, email, phone) {
  const formattedName = name.replace(' ', '_');
  return `(${formattedName} ${email}\n${phone})`;
}
