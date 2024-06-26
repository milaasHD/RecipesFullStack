const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Recipes',
        description: 'Recipes collection'
    },
    host: 'localhost:3000',
    schemes: ['http']
};

const outputFile = './swagger-output.json';
const routes = ["../scripts/app.js"]; // Make sure this path is correct

swaggerAutogen(outputFile, routes, doc).then(() => {
    console.log('Successfully generated swagger-output.json');
}).catch(error => {
    console.error('Failed to generate swagger documentation:', error);
});
