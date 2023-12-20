import { Router } from 'express';
import user from '../controllers/User';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.get('/', loginRequired, user.index);
// router.get('/:id', user.show);
//    post('/', loginRequired, user.store)
router.post('/', user.store);
router.put('/', loginRequired, user.update);
router.delete('/', loginRequired, user.delete);
export default router;

/*  index -> lista todos os usuários -> GET
store/create -> cria um novo usuários -> POST
delete -> apaga um usuários -> DELETE
show -> mostra um  usuário -> GET
update -> atualiza um usuário ->PATCH OU PUT */
