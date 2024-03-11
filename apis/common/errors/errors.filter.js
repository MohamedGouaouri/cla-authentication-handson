import { CodeGroundError } from "./errors.js";

export function errorFilter(response, error) {
    if (error instanceof CodeGroundError) {
      // Custom error handling for known errors
      response.status(error.status).json({
        status: 'error',
        error: error.message,
      });
    } else {
      // Generic error handling for unknown errors
      response.status(500).json({
        error: 'An unexpected error occurred.',
      });
    }
  }
