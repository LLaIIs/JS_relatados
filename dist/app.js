"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

_dotenv2.default.config();
require('./database');
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _home = require('./routes/home'); var _home2 = _interopRequireDefault(_home);
var _userR = require('./routes/userR'); var _userR2 = _interopRequireDefault(_userR);
var _tokenR = require('./routes/tokenR'); var _tokenR2 = _interopRequireDefault(_tokenR);
var _alunoR = require('./routes/alunoR'); var _alunoR2 = _interopRequireDefault(_alunoR);
var _fotoR = require('./routes/fotoR'); var _fotoR2 = _interopRequireDefault(_fotoR);

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares(); // Call the middlewares method
    this.routes();
  }

  middlewares() {
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    console.log('aqui estou');
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', _home2.default);
    this.app.use('/user', _userR2.default);
    this.app.use('/token', _tokenR2.default);
    this.app.use('/aluno', _alunoR2.default);
    this.app.use('/foto', _fotoR2.default);
  }
}

exports. default = new App().app;
