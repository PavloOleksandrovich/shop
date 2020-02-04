import dotenv from 'dotenv';

import { root } from '.';

const loadEnv = (): string => {
    const { NODE_ENV } = process.env;

    const env = NODE_ENV 
        ? `${NODE_ENV}.env`
        : '.env';

    dotenv.config({ path: root(env) });

    return env;
};


export default loadEnv;
