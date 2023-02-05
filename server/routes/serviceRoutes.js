const express = require('express');
const router = express.Router();
const { getService, setService, updateService, deleteService } = require('../controllers/serviceController');

// localhost:5000/api/service/
router.get('/', getService);

// localhost:5000/api/service/
router.post('/', setService);

// localhost:5000/api/service/:id
router.put('/', updateService);

// localhost:5000/api/service/:id
router.delete('/', deleteService);

module.exports = router; 