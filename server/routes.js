var express = require('express');
var router = express.Router();
var controller = require('./controller.js');

router.get('/companies', controller.getCompanies);
router.get('/jobs', controller.getJobs);
router.get('/locations', controller.getLocations);
router.get('/rounds', controller.getRounds);
router.get('/status', controller.getStatus);
router.post('/update', controller.updateStatus);

module.exports = router;