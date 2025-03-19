import swaggerUi from 'swagger-ui-express';
import config from '../config.js';
import loadJson from '../utils/load-json.js';

class SwaggerLoader {
    #app;
    #swaggerDoc;
    constructor(app) {
        this.#app = app;
        this.#swaggerDoc = this.#loadSwaggerDoc();
        this.#loadSwagger();
    }
    #loadSwagger() {
        this.#app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(this.#swaggerDoc))
    }
    #loadSwaggerDoc() {
        if(config.server.nodeEnv === 'development') {
            return loadJson('src/swagger-dev.json');
        } else {
            return loadJson('src/swagger-prod.json');
        }
    }
}

export default SwaggerLoader;