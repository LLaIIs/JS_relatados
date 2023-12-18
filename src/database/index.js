/* eslint-disable import/no-named-as-default */
import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/UserM';

const models = [Aluno, User];
const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
