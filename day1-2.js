/*jslint devel: true */

/* eslint-disable no-console */

/*eslint no-undef: "error"*/

/*eslint-env node*/

console.log('argv 속성의 파라미터 수 : ' + process.argv.length);

console.dir(process.argv);

console.log("=============================================");


process.argv.forEach(function(item, index) {

    console.log(index + ' : ' + item);




});
