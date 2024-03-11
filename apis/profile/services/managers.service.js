import { Manager } from "../models/Manager.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { roles } from "../../middlewares/auth/roles.js"

export const getManagerProfileService = async (managerId) => {
    // TODO: Implement get manager service
    return Manager.findById(managerId)
}

export const registerManagerService = async (manager) => {
    // TODO: Implement register manager
    try {
        const {manager_name, email, password} = manager
        const salt = await bcrypt.genSalt(parseInt(process.env.ROUNDS | 10));
        const hashPassowrd = await bcrypt.hash(password, salt)
        return await Manager.create({
            manager_name: manager_name,
            email: email,
            password: hashPassowrd
        })
  
      } catch (error) {
        throw error
      }
}

export const loginManagerService = async ({manager_name, password}) => {
    // TODO: Implement login manager
    const manager = await Manager.findOne({ manager_name: manager_name })
    if (!manager) {
      throw new NotFoundError('Manager not found')
    }
    // manger found
    // 1. Compare password
    const passwordDoesMatch = await bcrypt.compare(password, manager.password)
    if (!passwordDoesMatch) {
      throw new UnauthorizedError('Password is incorrect')
    }

    // 2. Generate toke with role
    const token = jwt.sign({
      id: manager._id,
      name: manager_name,
      role: roles.Manager
    }, 'secret', {
      expiresIn: 36000
    })
    return token
}

export const addMangerExpertiseService = async () => {
    // TODO: Implment Add expertise
}