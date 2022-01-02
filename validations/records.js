const { body, validationResult} = require('express-validator');
const ErrorHandler =  require('../utils/errorHandler');

module.exports = {
  /**
   *
   * @return {Array} Set of rules to validate request body
   */
  validateRules: () => {
    return [
      body('startDate').trim().isDate({format: 'YYYY-MM-DD', strictMode: true}),
      body('endDate').trim().isDate({format: 'YYYY-MM-DD', strictMode: true}),
      body('minCount').trim().isInt({min: 0}),
      body('maxCount').trim().isInt({min: 0, gte: body('minCount')}),
    ];
  },
  // Middleware to send error response if request body is not proper
  validate: (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessage = errors.errors.map((e)=> e.param).join(', ');
      return ErrorHandler.sendErrorResponse('BadRequest', `Invalid ${errorMessage}`, res);
    }
    next();
  },
};
