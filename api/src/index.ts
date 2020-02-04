import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

import { config } from './utils';

const server = express();

server.use('/', (req: Request, res: Response) => {
    res.send('work');
});

mongoose.connect(config.DATABASE.URI, {
    dbName: config.DATABASE.NAME,
    user: config.DATABASE.USERNAME,
    pass: config.DATABASE.PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        server.listen(
            config.SERVER.PORT,
            () => console.log(`Server running.Port [${config.SERVER.PORT}], env [${config.ENV}]`)
        );
    })
    .catch((err: Error) => {
        console.log(err);
        process.exit(1);
    });
