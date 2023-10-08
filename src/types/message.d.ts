import responses from '@/assets/response.json';

export type Response = (typeof responses)[number];

export type ResponseTokens = {
  user: string;
  ip: string;
} & Record<string, string>;
