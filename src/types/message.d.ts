import responses from '@/assets/response.json';

export type Response = (typeof responses)[number];

export type ResponseToken = {
  token: string;
  value: string;
};
