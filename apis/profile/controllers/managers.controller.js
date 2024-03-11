import { errorFilter } from "../../common/errors/errors.filter.js"
import { getManagerProfileService, loginManagerService } from "../services/managers.service.js"


export const getManagerProfileController = async (req, res, next) => {
    // Validate request
    // Invoke service
    try {
        const managerId = req.user
        const manager = await getManagerProfileService(managerId)
        return res.json({
            status: 'success',
            data: manager
        })
    } catch(error) {
        return errorFilter(res, error)
    }
}

export const registerManagerController = async (req, res, next) => {
    // Validate request
    // Invoke service
    try {
        const managerData = req.body
        const coder = await registerCoderService(managerData)
        return res.status(201).json({
            status: 'success',
            data: coder
        })
    } catch(error) {
        return errorFilter(res, error)
    }
}

export const loginManagerController = async (req, res, next) => {
    // Validate request
    // Invoke service
    try {
        const { manager_name, password } = req.body
        const token = await loginManagerService({ manager_name, password })
        return res.status(200).json({
            status: 'success',
            data: token
        })
    } catch(error) {
        return errorFilter(res, error)
    }
}

export const addMangerExpertise = (req, res, next) => {
    
}