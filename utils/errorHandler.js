module.exports = {
  /**
   * Send error response object based on status code error type
   * @param {String} statusCodeErr status code type
   * @param {String} message error message to be sent as response
   * @param {Object} res response object
   */
  sendErrorResponse: (statusCodeErr, message, res) => {
    switch (statusCodeErr) {
      case 'BadRequest':
        res.status(400).json({code: 400, message: message, records: []});
        break;
      case 'NotFound':
        res.status(404).json({code: 404, message: message, records: []});
        break;
      case 'InternalServerError':
        res.status(500).json({code: 500, message: message, records: []});
        break;
      default:
        res.status(500).json({code: 500, message: message, records: []});
    }
  },
};
