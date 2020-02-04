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

const loadVar = (
        envVar: string | number | boolean, 
        convert = false
    ): string | number | boolean => {
        if (typeof envVar !== 'string' || !convert) {
            return envVar;
        }

        return JSON.parse(envVar);
    };

export default loadEnv;
export { loadVar }
