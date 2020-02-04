// declare global types here
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            [key: string]: string | undefined;
            NODE_ENV: string | undefined;
            PORT: number;
        }
    }
}

export { IConfig, IServerConfig } from './config';
