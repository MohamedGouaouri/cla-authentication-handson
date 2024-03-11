import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { NotFoundError, UnauthorizedError } from '../../common/errors/errors.js';
import { roles } from '../../middlewares/auth/roles.js';
import { Coder } from '../models/Coder.js'

export const getCoderService = async (coderId) => {
    return await Coder.findById(coderId)
}

export const registerCoderService = async (coder) => {
    try {
      const {coder_name, email, password} = coder
      const salt = await bcrypt.genSalt(parseInt(process.env.ROUNDS | 10));
      const hashPassowrd = await bcrypt.hash(password, salt)
      return await Coder.create({
        coder_name: coder_name,
        email: email,
        password: hashPassowrd
      })

    } catch (error) {
      console.error(error)
      throw error
    }
  }


export const loginCoderService = async ({ coder_name, password }) => {
    const coder = await Coder.findOne({ coder_name: coder_name })
    if (!coder) {
      throw new NotFoundError('Coder not found')
    }
    // coder found
    // 1. Compare password
    const passwordDoesMatch = await bcrypt.compare(password, coder.password)
    if (!passwordDoesMatch) {
      throw new UnauthorizedError('Password is incorrect')
    }

    // 2. Generate toke with role
    const token = jwt.sign({
      id: coder._id,
      name: coder_name,
    }, 'secret', {
      expiresIn: 36000
    })

    return token
}