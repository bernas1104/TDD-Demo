import { Router } from 'express';

import UsersController from '../controllers/UsersController';

const router = Router();

const usersController = new UsersController();

router.get('/', usersController.index);
router.post('/signup', usersController.signup);
router.post('/signin', usersController.signin);

export default router;
