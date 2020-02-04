export interface IConfig {
    SETTINGS: ISettingsConfig;
    SERVER: IServerConfig;
    DATABASE: IDatabaseConfig;
}

export interface ISettingsConfig {
    ENV: string;
    PRODUCTION: boolean;
}

export interface IServerConfig {
    PORT: number;
    GRAPHQL_ENDPOINT: string;
}

export interface IDatabaseConfig {
    NAME: string;
    USERNAME: string;
    PASSWORD: string
    URI: string;
}
