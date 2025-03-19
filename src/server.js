import express from 'express';
import RouteLoader from './loaders/route-loader.js';
import config from './config.js'
import errorHandler from './middleware/errorhandler.js';
import SwaggerLoader from './loaders/swagger-loader.js';

// const swaggerDoc = await import('./swagger-output.json', { assert: { type: 'json'}});

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
        new SwaggerLoader(this.#app);
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