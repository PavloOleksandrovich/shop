import mongoose from 'mongoose';

import { config } from '.';

export default (callback: Function) => {
    mongoose.connect(config.DATABASE.URI, {
        dbName: config.DATABASE.NAME,
        user: config.DATABASE.USERNAME,
        pass: config.DATABASE.PASSWORD,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => callback())
        .catch((err: Error) => {
            console.log(err);
            process.exit(1);
        });
}
