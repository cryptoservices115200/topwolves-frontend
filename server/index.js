const api = require('./api');

// endpoint for AWS lambda. delegates to api.
exports.handler = async (event) => {
    return api(event.address);
};