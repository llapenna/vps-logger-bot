import type { GeolocationResponse } from '@/types/geolocation';

import { bold } from './utils';

/**
 * Generates a flag emoji from a country code
 * @param countryCode Country code, e.g. 'ES', 'AR', 'US'
 * @returns An `string` containing the flag emoji
 */
const getCountryFlag = (countryCode: string) => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

/**
 * Appends geolocation data to a message
 * @param message Message to append the geolocation data to
 * @param data Geolocation information
 * @returns The original message with the geolocation data appended
 */
export const appendGeolocation = (
  message: string,
  data: GeolocationResponse
): string => {
  const flag = getCountryFlag(data.countryCode);

  const country = `\n${bold('Country')}: ${flag} (${data.country})`;
  const city = `\n${bold('City')}: ${data.regionName}, ${data.city}`;

  const geolocationMessage = `${country}${city}`;
  return `${message}\n${geolocationMessage}`;
};
