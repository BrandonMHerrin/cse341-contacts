import contactsRouter from "../routes/contacts-route.js";


class RouteLoader {
    #app;
    constructor(app) {
        this.#app = app;
        this.#loadRoutes();
    }

    #loadRoutes() {
        this.#app.use(contactsRouter)
    }
}

export default RouteLoader;