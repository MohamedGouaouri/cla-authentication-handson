import jwt from 'jsonwebtoken'
import { UnauthorizedError } from "../../common/errors/errors.js"
import { errorFilter } from "../../common/errors/errors.filter.js"

export const authorize = (allowedRoles = []) => {
    // roles param can be a single role string (e.g. Role.User or 'User')
    // TODO: Implement authorize based on roles function
    return async (req, res, next) => {
        try {
            const authorization = req.headers.authorization
            if (!authorization) throw new UnauthorizedError()
            if (!authorization.startsWith('Bearer ')) throw new UnauthorizedError('Not bearer token')
            const token = authorization.split(' ')[1]
            if (!token) throw new UnauthorizedError('Token is not present')

            // Validate token
            const decodedToken = jwt.verify(token, 'secret')

            if (!allowedRoles.includes(decodedToken.role)) {
                throw new UnauthorizedError('Not authorized to do that action')
            }

            req.user = decodedToken
            next()
        } catch (error) {
            // 
            return errorFilter(res, error)
        }
    }
}