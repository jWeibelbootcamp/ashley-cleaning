const express = require('express');
const router = express.Router();
const { getService, setService, updateService, deleteService } = require('../controllers/serviceController');

// localhost:5000/api/service/
router.route('/').get(getService).post(setService);

// localhost:5000/api/service/:id
router.route('/:id').put(updateService).delete(deleteService);

module.exports = router;