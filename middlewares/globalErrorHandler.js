const globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode ? err.statusCode : 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    responseCode: "99",
    responseMessage: message,
  });
};

module.exports = globalErrorHandler;
