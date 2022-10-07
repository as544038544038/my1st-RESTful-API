import express, { json } from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
//import swaggerDocument from './swagger.json'assert { type: "json" };

const app = express();
const PORT = 8888;

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'User API',
      version: '1.0.0',
      description: 'A simple test for User API',
    },
    servers: [
      {
        url: 'http://localhost:8888',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

app.use(bodyParser.json());

app.use('/users', userRoutes);

//host:8888 homepage
app.get('/', (req, res) => {
  res.send('Hello this is homepage!');
});

const specs = swaggerJSDoc(options);
app.use('/api_docs', swaggerUI.serve, swaggerUI.setup(specs));

app.listen(PORT, () => console.log(`Server Running on port:${PORT}`));
