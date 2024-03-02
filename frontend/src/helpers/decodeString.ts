export function decodeString(preservedString: string): string {
  return preservedString.replace(/\\n/g, "\n").replace(/\\t/g, "\t").replaceAll("&quot;", '"');
}
