export function maskEmail(email: string): string {
  const atIndex = email.indexOf("@");
  if (atIndex <= 0) return "";

  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  // Short usernames use fewer visible characters to avoid overlapping ends.
  const visibleCount = username.length <= 4 ? 1 : 2;
  const prefix = username.slice(0, visibleCount);
  const suffix = username.length > 1 ? username.slice(-visibleCount) : "";

  return `${prefix}****${suffix}${domain}`;
}
