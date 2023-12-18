import userModel from '../models/User';

class User {
  async store(req, res) {
    try {
      const novoUser = await userModel.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await userModel.findAll();
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const users = await userModel.findByPk(req.params.id);
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.json(400).json({
          errors: ['ID não enviado'],
        });
      }
      const user = await userModel.findByPk(req.params.id);
      if (!user) {
        return res.json(400).json({
          errors: ['USUÁRIO não existe'],
        });
      }
      const novosDados = await user.update(req.body);
      return res.json(novosDados);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.json(400).json({
          errors: ['ID não enviado'],
        });
      }
      const user = await userModel.findByPk(req.params.id);
      if (!user) {
        return res.json(400).json({
          errors: ['USUÁRIO não existe'],
        });
      }
      await user.destroy();
      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}
export default new User();
