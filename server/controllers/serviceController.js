const asyncHandler = require('express-async-handler');

const Service = require('../models/serviceModel');

// @desc    get services
// @route   GET /api/service
// @access Private
const getService = asyncHandler(async (req, res) => {
    const services = await Service.find({ user: req.user.id });
    res.status(200).json({ services });
});

// @desc    set services
// @route   POST /api/service
// @access Private
const setService = asyncHandler(async (req, res) => {
    if(!req.body.text) { // this may need to be different than text
        res.status(400)
        throw new Error('error message to be later determined')
    };

    const service = await Service.create({
        text: req.body.text,
        user: req.user.id,
    });

    res.status(200).json({ service });
});

// @desc    update services
// @route   PUT /api/service/:id
// @access Private
const updateService = asyncHandler(async (req, res) => {
    const service = await Service.findById(req.params.id)

    if(!service) {
        res.status(400)
        throw new Error('Service not found.')
    };

    const updatedService = await Service.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json({ updatedService });
});

// @desc    delete services
// @route   DELETE /api/service/:id
// @access Private
const deleteService = asyncHandler(async (req, res) => {
    const service = await Service.findById(req.params.id)

    if(!service) {
        res.status(400)
        throw new Error('Service not found.')
    };

    await service.remove();

    res.status(200).json({ id: req.params.id })
});

module.exports = {
    getService,
    setService,
    updateService,
    deleteService
};