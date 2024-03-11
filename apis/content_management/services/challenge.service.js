import { DatabaseError, NotFoundError } from "../../common/errors/errors.js"
import { Challenge } from "../models/Challenge.js"


export const getAll = async () => {
  return await Challenge.find({})
}

export const createChallenge = async (challenge) => {
  try {
    const newChallenge = new Challenge(challenge)
    await newChallenge.save()
    return newChallenge
  } catch (e) {
    throw new DatabaseError()
  }
}
export const getChallengeById = async (challengeId) => {
  try {
    let challenge = await Challenge.findById(challengeId, '-__v')

    if (!challenge) {
      throw new NotFoundError('Challenge not found')
    }
    return challenge
  } catch (e) {
    console.log(e);
    throw new DatabaseError()
  }
}
export const getChallengeTestsById = async (challengeId) => {
  try {
    const challenge = await Challenge.findById(challengeId)

    if (!challenge) {
      throw new NotFoundError('Challenge not found')
    }
    return {
      func_name: challenge.func_name,
      tests: challenge.tests
    }

  } catch (e) {
    console.error(e);
    throw new DatabaseError()
  }
}

export const getChallengesByCategory = async (categorie) => {
  try {
    const challenges = await Challenge.find({ categorie: categorie });
    return challenges
  } catch (e) {
    console.error(e);
    throw new DatabaseError()
  }
}
