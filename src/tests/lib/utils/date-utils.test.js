import { checkIsoDate, getLocaleDate } from '@utils/date-utils';

describe('GetLocaleDate', () => {
    it('should return a locale date string', () => {
        const localeDate = getLocaleDate('en-US', '2021-09-16T15:30:00');
        expect(localeDate).toBe('Thursday, September 16, 2021');
    });
});

describe('CheckIsoDate', () => {

    it('should not return if the ISO date string is valid', () => {
        expect(checkIsoDate('2021-09-16T15:30:00')).toBeUndefined();
    });

    it('should throw an error if the ISO date string is not valid', () => {
        expect(() => {
            checkIsoDate('invalidDateString');
        }).toThrow('The ISO date (invalidDateString) is not valid');
    });

});