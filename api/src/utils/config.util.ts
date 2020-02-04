import loadEnv from './load-env.util';
const ENV = loadEnv();

import { IConfig, IServerConfig, IDatabaseConfig } from "../types";

const SERVER: IServerConfig = {
    PORT: +process.env.PORT || 3004
};

const DATABASE: IDatabaseConfig = {
    NAME: process.env.DATABASE_NAME,
    USERNAME: process.env.DATABASE_USERNAME,
    PASSWORD: process.env.DATABASE_PASSWORD,
    URI: process.env.DATABASE_URI
};

const config: IConfig = { 
    ENV,
    SERVER,
    DATABASE
};

export default config;
