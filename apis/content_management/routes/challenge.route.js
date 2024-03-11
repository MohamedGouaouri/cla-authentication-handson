import express from 'express'
import { getAll, createChallenge, getChallengeById, getChallengeTestsById, getChallengesByCategory } from '../controllers/challenge.controller.js';


const contentRouter = express.Router();
contentRouter.get("/", getAll)
contentRouter.post("/create", createChallenge)
contentRouter.get("/:challengeId", getChallengeById)
contentRouter.get("/tests/:challengeId", getChallengeTestsById)
contentRouter.get("/category/:category", getChallengesByCategory)

export default contentRouter;