import AppError from "./app-error.js";

class DatabaseError extends AppError {
  constructor(message = "Database Error") {
    super(message, 500);
  }
}

export default DatabaseError;