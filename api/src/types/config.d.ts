export interface IConfig {
    ENV: string;
    SERVER: IServerConfig;
    DATABASE: IDatabaseConfig;
}

export interface IServerConfig {
    PORT: number;
}

export interface IDatabaseConfig {
    NAME: string;
    USERNAME: string;
    PASSWORD: string
    URI: string;
}
