// Webpack configuration
// This file is used to configure the webpack build process for the Symfony project.
// It will build the assets and output them to the 'source/assets/build/' directory.

const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

// Configure Encore
Encore
    .setOutputPath('source/build/')
    .setPublicPath('/build')

    // Add entry points
    .addEntry('app', './source/assets/js/app.js') // Add entry point for app.js
    .addStyleEntry('styles', './source/assets/css/app.scss') // Add entry point for app.scss

    // Enable Sass loader
    .enableSassLoader()

    // Enable source maps for debugging
    .enableSourceMaps(!Encore.isProduction())

    // Enable versioning for cache busting
    .enableVersioning(Encore.isProduction())

    // Cleanup output before build
    .cleanupOutputBeforeBuild()
    .enableSingleRuntimeChunk()
    ;

module.exports = Encore.getWebpackConfig();
