import swaggerAutogen from "swagger-autogen";

const doc = {
    info: {
        title: 'Contacts API',
        description: 'Documentation for Contacts API for CSE341 Contacts Project.'
    },
    host: 'cse341-contacts-5u7a.onrender.com'
}

const outputFile = './swagger-prod.json';
const routes = ['./routes/contacts-route.js'];

swaggerAutogen()(outputFile, routes, doc);