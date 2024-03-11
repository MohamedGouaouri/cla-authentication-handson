import express from 'express'
import { addMangerExpertise, getManagerProfileController, loginManagerController, registerManagerController } from '../controllers/managers.controller.js';


const managersRouter = express.Router();
managersRouter.get('/profile', getManagerProfileController);

managersRouter.post("/register", registerManagerController)

managersRouter.post("/login", loginManagerController)

managersRouter.post("/add_expertise", addMangerExpertise)
export default managersRouter;