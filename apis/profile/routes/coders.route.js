import express from 'express'
import { getCoderController, loginCoderController, registerCoderController } from '../controllers/coders.controller.js'

const codersRouter = express.Router();

codersRouter.get('/profile', getCoderController);
codersRouter.post("/register", registerCoderController)
codersRouter.post("/login", loginCoderController)

export default codersRouter;