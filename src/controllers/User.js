import userModel from '../models/User';

class User {
  async store(req, res) {
    try {
      const novoUser = await userModel.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      console.error(e);
      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : ['Erro desconhecido ao criar usuário.'],
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await userModel.findAll({ attributes: ['id', 'nome', 'email', 'password'] });
      return res.json(users);
    } catch (e) {
      console.error(e);
      return res.status(500).json({
        errors: ['Erro desconhecido ao listar usuários.'],
      });
    }
  }

  // Show
  async show(req, res) {
    try {
      const user = await userModel.findByPk(req.params.id);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      console.error(e);
      return res.status(500).json({
        errors: ['Erro desconhecido ao buscar usuário.'],
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      const user = await userModel.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['USUÁRIO não existe'],
        });
      }
      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email });
    } catch (e) {
      console.error(e);
      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : ['Erro desconhecido ao atualizar usuário.'],
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const user = await userModel.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['USUÁRIO não existe'],
        });
      }
      await user.destroy();
      return res.json(null);
    } catch (e) {
      console.error(e);
      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : ['Erro desconhecido ao excluir usuário.'],
      });
    }
  }
}

export default new User();
