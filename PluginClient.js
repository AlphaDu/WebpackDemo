
const Compiler=require('webpack').Compiler;
const config=require('./webpack.config');

const compiler = newCompiler(config);

function logPlugin () {
}
logPlugin.prototype.apply=function (compiler) {
    compiler.plugin('should-emit', parentCompilation => {
        console.log('should emit');
    });
};

new logPlugin().apply(compiler);
const callback=(err, stats) => {
    console.log('Compiler has finished execution.');
    /* Do something to show the stats */
};

// call run on the compiler along with the callback
compiler.run(callback);