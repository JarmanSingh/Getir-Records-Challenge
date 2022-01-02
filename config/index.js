/* eslint-disable global-require */
const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 8080;

const shared = {
    env,
    port,
};

const config = require(`./${process.env.NODE_ENV || 'development'}`);

module.exports = { ...shared, ...config };
