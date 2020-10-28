var concat = require('concat');
const es5 = ['./dist/spacex/runtime-es5.js','./dist/spacex/polyfills-es5.js','./dist/spacex/main-es5.js'];
const es2015= ['./dist/spacex/runtime-es2015.js','./dist/spacex/polyfills-es2015.js','./dist/spacex/main-es2015.js'];
concat(es5, './dist/spacex/elements-es5.js');
concat(es2015, './dist/spacex/elements-es2015.js');