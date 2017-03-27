const Compiler = require('webpack').Compiler;
const config =  require('./webpack.config.js');
// Create a new compiler instance
const compiler = new Compiler();

// Populate all required options
compiler.options = config;

// Creating a plugin.
class LogPlugin {
    apply (compiler) {
        compiler.plugin('should-emit', compilation => {
            console.log('should i emit?');
            return true;
        })
    }
}

// Apply the compiler to the plugin
new LogPlugin().apply(compiler);

/* Add other supporting plugins */

// Callback to be executed after run is complete
const callback = (err, stats) => {
    console.log('Compiler has finished execution.');
    /* Do something to show the stats */
};

// call run on the compiler along with the callback
compiler.run(callback);