var express = require('express');
var router = express.Router();
var controller = require('./controller.js');

router.get('/companies', controller.getCompanies);
router.get('/jobs', controller.getJobs);
router.get('/all', controller.getAll);

module.exports = router;