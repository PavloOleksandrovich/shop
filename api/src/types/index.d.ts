// declare global types here
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            [key: string]: string | undefined;

            // ENV
            NODE_ENV: string | undefined;

            // SERVER
            PORT: number;

            // DATABASE
            DATABASE_NAME: string;
            DATABASE_USERNAME: string;
            DATABASE_PASSWORD: string;
            DATABASE_URI: string;
        }
    }
}

export { IConfig, IServerConfig, IDatabaseConfig } from './config';
