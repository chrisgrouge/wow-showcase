const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

module.exports = withPlugins([withSass, withImages]);
