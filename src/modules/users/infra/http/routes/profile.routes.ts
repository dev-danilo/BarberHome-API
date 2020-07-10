import { Router } from 'express';

import ProfileController from '@modules/users/infra/http/controllers/ProfileController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const profileRouter = Router();

const profileController = new ProfileController();
// Rota: receber a requisição, chamar outro arquivo, devolver a resposta

profileRouter.use(ensureAuthenticated); // rotas devem estar autenticadas
profileRouter.get('/', profileController.show);
profileRouter.put('/', profileController.update);

export default profileRouter;
