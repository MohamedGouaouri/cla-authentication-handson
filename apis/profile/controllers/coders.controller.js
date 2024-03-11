import { errorFilter } from "../../common/errors/errors.filter.js"
import { getCoderService, loginCoderService, registerCoderService } from "../services/coders.service.js"


export const getCoderController = async (req, res, next) => {
    // Validate request
    // Invoke service
    try {
        const coderId = req.user.id
        const coder = await getCoderService(coderId)
        return res.json({
            status: 'success',
            data: coder
        })
    } catch(error) {
        return errorFilter(res, error)
    }
}

export const registerCoderController = async (req, res, next) => {
    // Validate request
    // Invoke service
    try {
        const coderData = req.body
        const coder = await registerCoderService(coderData)
        return res.status(201).json({
            status: 'success',
            data: coder
        })
    } catch(error) {
        return errorFilter(res, error)
    }
}

export const loginCoderController = async (req, res, next) => {
    // Validate request
    // Invoke service
    try {
        const { coder_name, password } = req.body
        const token = await loginCoderService({ coder_name, password })
        return res.status(200).json({
            status: 'success',
            data: token
        })
    } catch(error) {
        console.log(error)
        return errorFilter(res, error)
    }
}