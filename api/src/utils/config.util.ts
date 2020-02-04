import loadEnv from './load-env.util';
const ENV = loadEnv();

import { IConfig, IServerConfig } from "../types";

const SERVER: IServerConfig = {
    PORT: +process.env.PORT || 3004
};

const config: IConfig = { 
    ENV,
    SERVER 
};

export default config;
