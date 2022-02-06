/**
 * @constant {Intl.DateTimeFormatOptions} The date format option.
 */
export const DATE_FORMAT_OPTIONS = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

/**
 * Get the locale date string from a date string.
 * 
 * @param {string} dateLocale - The date locale.
 * @param {string} dateString - The date string.
 * @returns string - The locale date string.
 */
export function getLocaleDate(dateLocale, dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString(dateLocale, DATE_FORMAT_OPTIONS);
}

/**
 * Check a ISO date string.
 * If the ISO date string is valid, the function will not return.
 * If the ISO date string is not valid, the function will throw an error and stop the app.
 * 
 * @param {string} IsoDateString - The ISO date formated string.
 * @throws {Error} The ISO date string must be valid. 
 */
export function checkIsoDate(IsoDateString) {
    const ISODateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/;
    if (IsoDateString.search(ISODateRegex) === -1) throw new Error(`The ISO date (${IsoDateString}) is not valid`);
}