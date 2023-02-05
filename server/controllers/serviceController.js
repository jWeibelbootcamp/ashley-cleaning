const asyncHandler = require('express-async-handler');

// @desc    get services
// @route   GET /api/service
// @access Private
const getService = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'get services' });
});

// @desc    set services
// @route   POST /api/service
// @access Private
const setService = asyncHandler(async (req, res) => {
    if(!req.body.text) { // this may need to be different than text
        res.status(400)
        throw new Error('error message to be later determined')
    };
    res.status(200).json({ message: 'set services' });
});

// @desc    update services
// @route   PUT /api/service/:id
// @access Private
const updateService = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `update services ${req.params.id}` })
});

// @desc    delete services
// @route   DELETE /api/service/:id
// @access Private
const deleteService = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete services ${req.params.id}` })
});

module.exports = {
    getService,
    setService,
    updateService,
    deleteService
};