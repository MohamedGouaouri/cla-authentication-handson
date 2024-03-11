import * as challengeService from "../services/challenge.service.js";

export const getAll = async (req, res) => {
  try {
    const challenges = await challengeService.getAll()
    return res.json({
        status: 'success',
        data: challenges
    })
  } catch(error) {
     return error(res, error)
  }
}
export const createChallenge = async (req, res) => {
  // Validate request
  // Invoke service
  const challengeData = req.body
  try {
    const challenge = await challengeService.createChallenge(challengeData);
    return res.status(201).json({
        status: 'success',
        data: challenge
    })
  } catch(error) {
     return error(res, error)
  }
}

export const getChallengeById = async (req, res) => {
  // Validate request
  // Invoke service
  try {
    const challengeId = req.params.challengeId
    const challenge = await challengeService.getChallengeById(challengeId);
    return res.status(201).json({
        status: 'success',
        data: challenge
    })
  } catch(error) {
     return error(res, error)
  }
}

export const getChallengeTestsById = async (req, res) => {
  // Validate request
  // Invoke service
  try {
    const challengeId = req.params.challengeId
    const tests = await challengeService.getChallengeTestsById(challengeId);
    return res.status(201).json({
        status: 'success',
        data: tests
    })
  } catch(error) {
     return error(res, error)
  }
}
export const getChallengesByCategory = async (req, res) => {
  // Validate request
  // Invoke service
  try {
    const category = req.params.category
    const tests = await challengeService.getChallengesByCategory(category);
    return res.status(201).json({
        status: 'success',
        data: tests
    })
  } catch(error) {
     return error(res, error)
  }
}
