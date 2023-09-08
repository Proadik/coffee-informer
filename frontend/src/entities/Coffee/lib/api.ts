import axios from 'axios';

export const fetchLatestCoffee = async () => {
  const req = await axios.get('http://localhost:3005/coffee/latest');
  return req.data;
};

export const fetchNewCoffee = async () => {
  const req = await axios.get('http://localhost:3005/coffee/new');
  return req.data;
};
