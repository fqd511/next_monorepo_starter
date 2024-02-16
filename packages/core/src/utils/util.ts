/**
 * format timestamp to YYYY-MM-dd mm:ss
 * @param timeStr
 */
export function timeParser(timeStr: string) {
  const date = new Date(timeStr);
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date string");
  }
  return date.toISOString().slice(0, 16).replace("T", " ");
}

export const isServer = typeof window === "undefined";

/**
 *  convert rem to pixels
 * @param rem
 */
export function convertRemToPixels(rem: number) {
  return rem * getRem();
}

/**
 * parse number/string to percentage string
 * '0.95' => 95%
 * @param val
 */
export function parsePercentage(val: string | number): string {
  return +(parseNumber(val) * 100).toFixed(2) + "%";
}

export function parseNumber(val: string | number): number {
  return parseFloat(val.toString());
}

/**
 * get rem in pixels
 */
export function getRem() {
  return isServer
    ? 16
    : parseFloat(getComputedStyle(document.documentElement).fontSize);
}

/**
 *  get object from localStorage or return default value
 * @param key
 * @param defaultValue
 */
export function getObjectFromLocalStorage<T, U = T | undefined>(
  key: string,
  defaultValue: U,
): T | U {
  if (isServer) return defaultValue;
  try {
    return (JSON.parse(localStorage.getItem(key) || "") as T) || defaultValue;
  } catch (error) {
    return defaultValue;
  }
}

/**
 * save object to localStorage
 * @param key
 * @param val
 */
export function syncToLocalStorage<T>(key: string, val?: T) {
  if (isServer) return;
  if (val === undefined) {
    localStorage.removeItem(key);
  } else {
    localStorage.setItem(
      key,
      typeof val === "string" ? val : JSON.stringify(val),
    );
  }
}