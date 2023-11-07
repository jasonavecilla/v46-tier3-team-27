export function getFromLocalStorage(key, defaultValue) {
  const saved = localStorage.getItem(key);
  return saved !== null ? JSON.parse(saved) : defaultValue;
}
