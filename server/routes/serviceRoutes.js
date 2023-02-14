const express = require('express');
const router = express.Router();
const { getService, setService, updateService, deleteService } = require('../controllers/serviceController');
const { protect } = require('../middleware/authMiddleware');

// localhost:5000/api/service/
router.route('/').get(protect, getService).post(protect, setService);

// localhost:5000/api/service/:id
router.route('/:id').put(protect, updateService).delete(protect, deleteService);

module.exports = router;