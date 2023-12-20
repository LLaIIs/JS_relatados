import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();
import './src/database';
import express from 'express';
import homeR from './src/routes/home';
import userR from './src/routes/userR';
import tokenR from './src/routes/tokenR';
import alunoR from './src/routes/alunoR';
import fotoR from './src/routes/fotoR';

class App {
  constructor() {
    this.app = express();
    this.middlewares(); // Call the middlewares method
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    console.log('aqui estou');
    this.app.use(express.static(resolve(__dirname, 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', homeR);
    this.app.use('/user', userR);
    this.app.use('/token', tokenR);
    this.app.use('/aluno', alunoR);
    this.app.use('/foto', fotoR);
  }
}

export default new App().app;
