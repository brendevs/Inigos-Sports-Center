export function setToken() {
  document.cookie = "token=logged_in; path=/";
}

export function getToken() {
  if (typeof document === "undefined") return null;

  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="));

  return token ? token.split("=")[1] : null;
}

export function removeToken() {
  document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}
