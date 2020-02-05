import loadEnv, { loadVar } from './load-env.util';
const ENV = loadEnv();

import { 
    IConfig, 
    IServerConfig, 
    IDatabaseConfig, 
    ISettingsConfig 
} from "../types";

const { 
    PRODUCTION, 
    PORT, 
    GRAPHQL_ENDPOINT,
    DATABASE_URI,
    DATABASE_PASSWORD,
    DATABASE_USERNAME,
    DATABASE_NAME
} = process.env;

const SETTINGS: ISettingsConfig = {
    ENV: loadVar(ENV) as string,
    PRODUCTION: loadVar(PRODUCTION, true) as boolean
};

const SERVER: IServerConfig = {
    PORT: loadVar(PORT || 3004, true) as number,
    GRAPHQL_ENDPOINT: loadVar(GRAPHQL_ENDPOINT) as string
};

const DATABASE: IDatabaseConfig = {
    NAME: loadVar(DATABASE_NAME) as string,
    USERNAME: loadVar(DATABASE_USERNAME) as string,
    PASSWORD: loadVar(DATABASE_PASSWORD) as string,
    URI: loadVar(DATABASE_URI) as string
};

const config: IConfig = { 
    SETTINGS,
    SERVER,
    DATABASE
};

export default config;
