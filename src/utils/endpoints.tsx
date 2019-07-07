import APIClient from './api-client';

const API = new APIClient('https://api-link.com');

export const endpoints = {
  sample: {
    get: (params: {id?: number}) => API.get('sample', params),
  },
};
