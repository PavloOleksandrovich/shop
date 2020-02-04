import express, { Request, Response } from 'express';

import { config } from './utils';

const server = express();

server.use('/', (req: Request, res: Response) => {
    res.send('work');
});

server.listen(
    config.SERVER.PORT,
    () => console.log(`Server running.Port [${config.SERVER.PORT}], env [${config.ENV}]`)
);
