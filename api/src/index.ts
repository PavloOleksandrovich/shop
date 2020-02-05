import express from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';

import { connectMongo } from './utils';
import { config } from '../../common/utils';
import schema from './schemas';

const server = express();

server.use(cors());

server.use(config.SERVER.GRAPHQL_ENDPOINT, graphqlHTTP({
    schema,
    graphiql: !config.SETTINGS.PRODUCTION
}));

connectMongo(() => {
    server.listen(
        config.SERVER.PORT,
        () => console.log(`Server running.Port [${config.SERVER.PORT}], env [${config.SETTINGS.ENV}]`)
    );
})
