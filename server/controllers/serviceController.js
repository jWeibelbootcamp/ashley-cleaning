// @desc    get services
// @route   GET /api/service
// @access Private
const getService = (req, res) => {
    res.status(200).json({ message: 'get services' });
};

// @desc    set services
// @route   POST /api/service
// @access Private
const setService = (req, res) => {
    res.status(200).json({ message: 'set services' })
};

// @desc    update services
// @route   PUT /api/service/:id
// @access Private
const updateService = (req, res) => {
    res.status(200).json({ message: `update services ${req.params.id}` })
};

// @desc    delete services
// @route   DELETE /api/service/:id
// @access Private
const deleteService = (req, res) => {
    res.status(200).json({ message: `delete services ${req.params.id}` })
};

module.exports = {
    getService,
    setService,
    updateService,
    deleteService
};