'use strict'
const webpack = require('webpack');
const config = require('./webpack.config.js');

const cpl = new webpack.Compiler();

let Compiler = webpack(config,(err,stats)=>{
    if(err||stats.hasErrors()){
        console.log(err);
        throw err;
    }

    console.log('configure complete !');
});
Compiler.plugin('compilation',(compilation)=>{
   compilation.plugin('seal',()=>{
       console.log('sealing');
    })
});

Compiler.run((err,stats)=>{
    if(err||stats.hasErrors()){
        console.log(err);
        throw err;
    }
    console.log('Run compile complete！')
});

// const watching = Compiler.watch({},(err,stats)=>{
//     if(err||stats.hasErrors()){
//         console.log(err);
//         throw err;
//     }
//     console.log(stats.toString({
//         colors:true
//     }));
//     console.log('watching trigger!');
// });

function  myCompilationPlugin () {

}
