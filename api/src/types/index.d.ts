// declare global types here
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            [key: string]: string | undefined;

            // SETTINGS
            NODE_ENV: string | undefined;
            PRODUCTION: string;

            // SERVER
            PORT: number;
            GRAPHQL_ENDPOINT: string;

            // DATABASE
            DATABASE_NAME: string;
            DATABASE_USERNAME: string;
            DATABASE_PASSWORD: string;
            DATABASE_URI: string;
        }
    }
}

export { 
    IConfig, 
    ISettingsConfig, 
    IServerConfig, 
    IDatabaseConfig 
} from './config';
