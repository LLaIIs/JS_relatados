import { Router } from 'express';
import user from '../controllers/User';

const router = new Router();

router.post('/', user.store);
router.get('/', user.index);
router.get('/:id', user.show);
router.put('/:id', user.update);
router.delete('/:id', user.delete);
export default router;

/*  index -> lista todos os usuários -> GET
store/create -> cria um novo usuários -> POST
delete -> apaga um usuários -> DELETE
show -> mostra um  usuário -> GET
update -> atualiza um usuário ->PATCH OU PUT */
