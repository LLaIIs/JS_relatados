import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import homeR from './src/routes/home';
import userR from './src/routes/userR';
import tokenR from './src/routes/tokenR';

class App {
  constructor() {
    this.app = express();
    this.middlewares(); // Call the middlewares method
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeR);
    this.app.use('/user', userR);
    this.app.use('/token', tokenR);
  }
}

export default new App().app;
