
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
