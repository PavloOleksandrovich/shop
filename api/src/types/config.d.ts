export interface IConfig {
    ENV: string;
    SERVER: IServerConfig;
}

export interface IServerConfig {
    PORT: number;
}
