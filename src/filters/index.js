export function readMore(text, length, suffix) {
  return text.substring(0, length) + suffix;
}

export function uppercaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
