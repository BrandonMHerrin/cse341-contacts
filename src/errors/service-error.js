import AppError from "./app-error.js";

class ServiceError extends AppError {
  constructor(message = "Service Error") {
    super(message, 500);
  }
}

export default ServiceError;
