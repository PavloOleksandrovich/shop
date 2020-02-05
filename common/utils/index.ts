import { join } from 'path';

export const root = join.bind(this, __dirname, '../../');

export { default as loadEnv } from './load-env.util';
export { default as config } from './config.util';
