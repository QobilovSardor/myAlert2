import { backend } from './index.js';

export const exampleRequest = (token, body) =>
  backend(token).post('/example', body);
