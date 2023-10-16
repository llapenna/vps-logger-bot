import type { GeolocationResponse } from '@/types/geolocation';
import logger from '@/utils/logger';

const BASE_URL = 'http://ip-api.com/json';

/**
 * Get geolocation data for an IP address
 * @param ip IP address to get geolocation data for
 * @returns `GeoLocationResponse` object
 */
const ipInfo = async (ip: string) => {
  logger.info(`Getting geolocation data for '${ip}'...`);
  const response = await fetch(`${BASE_URL}/${ip}`);
  return response.json() as Promise<GeolocationResponse>;
};

const geolocation = {
  ipInfo,
};
export default geolocation;
