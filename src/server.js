import express from 'express';
import RouteLoader from './loaders/route-loader.js';
import config from './config.js'
import errorHandler from './middleware/errorhandler.js';

class Server {
    #port;
    #app;
    constructor() {
        this.#port = config.server.port;
        this.#app = express();
        this.#runLoaders();
        this.#runServer();
    }

    #runLoaders() {
        this.#app.use(express.json());
        new RouteLoader(this.#app);
        this.#app.use(errorHandler);
    }

    #runServer() {
        this.#app.listen(this.#port, () => {
            console.log(`Listening on port: ${this.#port}`);
        })
    }
}

new Server();