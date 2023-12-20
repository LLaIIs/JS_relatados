import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';
import foto from '../controllers/Foto';
// eslint-disable-next-line import/no-named-as-default

const router = new Router();

router.post('/', loginRequired, foto.store);

export default router;
