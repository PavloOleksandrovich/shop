import express, { Request, Response } from 'express';

const server = express();

server.use('/', (req: Request, res: Response) => {
    res.send('work');
});

// TODO: change static port to port from config
server.listen(
    3000,
    () => console.log(`Server running.Port [${3000}], env [${'TODO'}]`)
);
