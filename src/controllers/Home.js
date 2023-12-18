import Aluno from '../models/Aluno';

class Home {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Lais',
      sobrenome: 'Silva',
      email: 'lasi@gmail.com',
      idade: 17,
      peso: 300,
      altura: 1.74,
    });
    res.json(novoAluno);
  }
}

export default new Home();
