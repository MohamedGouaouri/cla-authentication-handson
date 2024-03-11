// Base class for custom errors
export class CodeGroundError extends Error {
    constructor(message, status) {
      super(message);
      this.name = this.constructor.name;
      this.status = status || 500;
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
// ServiceError class for general service-related errors
export class ServiceError extends CodeGroundError {
    constructor(message, status) {
      super(message || 'Service Error', status || 500);
    }
  }
  
  // DatabaseError class for errors related to database operations
export class DatabaseError extends ServiceError {
    constructor(message, status) {
      super(message || 'Database Error', status || 500);
    }
  }
  
  // ValidationError class for errors related to input validation
export class ValidationError extends ServiceError {
    constructor(message, status) {
      super(message || 'Validation Error', status || 400);
    }
  }
  
  // HTTPError class for generic HTTP errors
export class HTTPError extends CodeGroundError {
    constructor(message, status) {
      super(message || 'HTTP Error', status || 500);
    }
  }
  
  // NotFoundError class for 404 Not Found errors
export class NotFoundError extends HTTPError {
    constructor(message) {
      super(message || 'Not Found', 404);
    }
  }
  
  // UnauthorizedError class for 401 Unauthorized errors
export class UnauthorizedError extends HTTPError {
    constructor(message) {
      super(message || 'Unauthorized', 401);
    }
}
