import { BaseClient } from '@/shared';

export const fetchLatestCoffee = async () => {
  const req = await BaseClient.get('/coffee/latest');
  return req.data;
};

export const fetchNewCoffee = async () => {
  const req = await BaseClient.get('/coffee/new');
  return req.data;
};

export const fetchCoffee = async (id: string) => {
  const req = await BaseClient.get(`/coffee/${id}`);
  return req.data;
};
