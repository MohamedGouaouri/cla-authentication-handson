import express from 'express'
import { getAll, createChallenge, getChallengeById, getChallengeTestsById, getChallengesByCategory } from '../controllers/challenge.controller.js';
import { authorize } from '../../middlewares/auth/authorize.middleware.js';
import { roles } from '../../middlewares/auth/roles.js';


const contentRouter = express.Router();
contentRouter.get("/", authorize(), getAll)
contentRouter.post("/create", authorize([roles.Manager]),createChallenge)
contentRouter.get("/:challengeId", getChallengeById)
contentRouter.get("/tests/:challengeId", getChallengeTestsById)
contentRouter.get("/category/:category", getChallengesByCategory)

export default contentRouter;