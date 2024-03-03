export function decodeString(encodedString: string): string {
  return atob(encodedString);
}
