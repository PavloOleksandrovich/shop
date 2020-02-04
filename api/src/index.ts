import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import { config } from './utils';
import schema from './schemas';

const server = express();

server.use(config.SERVER.GRAPHQL_ENDPOINT, graphqlHTTP({
    schema,
    graphiql: !config.SETTINGS.PRODUCTION
}));

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
            () => console.log(`Server running.Port [${config.SERVER.PORT}], env [${config.SETTINGS.ENV}]`)
        );
    })
    .catch((err: Error) => {
        console.log(err);
        process.exit(1);
    });
