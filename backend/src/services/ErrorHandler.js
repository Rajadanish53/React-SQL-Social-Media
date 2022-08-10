class ErrorHandler {
  constructor(status, error) {
    this.status = status;
    this.error = error;
  }
  MissingFields(error) {
    return new ErrorHandler(
      401,
      error ? { error } : { error: "Some Fields Are Missing !" }
    );
  }
  NotFound(error) {
    return new ErrorHandler(404, error ? { error } : { error: "Not Found" });
  }
  TokenExpired(error) {
    return new ErrorHandler(
      401,
      error ? { error } : { error: "Token Has been expired please re-login" }
    );
  }
  ValidationError(error) {
    return new ErrorHandler(
      401,
      error ? { error } : { error: "Incorrect Credentials !" }
    );
  }
}
module.exports = new ErrorHandler();
