const Records = require('../controller/records')
const validation  = require('../validations/records');
const router = require('express').Router()

router.post(
    '/getrecords',
    validation.validateRules(),
    validation.validate,
    Records.getRecords,
);

module.exports = router;
