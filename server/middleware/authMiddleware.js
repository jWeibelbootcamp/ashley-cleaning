const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const protect = asyncHandler(async (req, res, next) => {
    let token;
    
    // check authorization object in headers to see if it starts with 'Bearer'
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // get token from header - split 'Bearer' from the token by the space
            token = req.headers.authorization.split(' ')[1];

            // verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // get user by the id in the token w/o the password
            req.user = await User.findById(decoded.id).select('-password');

            next();
        } catch (error) {
            console.log(error);
            res.status(401);
            throw new Error ('Not authorized.');
        }
    }
    if(!token) {
        res.status(401);
        throw new Error ('Not authorized.');
    }
});

module.exports = protect;