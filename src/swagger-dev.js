import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'Contacts API',
        description: 'Documentation for Contacts API for CSE341 Contacts Project.'
    },
    host: 'localhost:8080'
}

const outputFile = './swagger-dev.json';
const routes = ["./routes/contacts-route.js"];

swaggerAutogen()(outputFile, routes, doc);