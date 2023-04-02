//Check for errors in request body or params using express-validator
const { body, validationResult } = require("express-validator");

const checkRequestErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            responseCode: "01",
            responseMessage: "Validation failed",
            responseData: errors.array(),
        });
    }
    next();
};

module.exports = checkRequestErrors;