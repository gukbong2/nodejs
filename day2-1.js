/*jslint devel: true */

/* eslint-disable no-console */

/*eslint no-undef: "error"*/

/*eslint-env node*/

var testcalc = {};

testcalc.add = function(a, b) {

    return a + b;
};

console.log('모듈로 분리하기 전 -calc.add : ' + testcalc.add(10, 5));

//require로 다른 js파일을 불러와서 사용 가능
var calcModule = require('./calc');

console.log('모듈로 분리한 후 calc.js : ' + calcModule.add(11, 7));


var calcModule2 = require('./calc2');

console.log('모듈로 분리한 후 calc.js : ' + calcModule2.add(20, 7));


//외부모듈 사용
//cmd에서 해당 모듈 npm install xxxx 다운로드
var nconf = require('nconf');
nconf.env();
var value = nconf.get('OS');
console.log("OS 환경변수의 값 : " + value);

//내장모듈 사용
var os = require('os');
console.log('hostname : ' + os.hostname);
console.log('memory : ' + os.freemem());

var path = require('path');

var directories = ['Users', 'gukbong2', 'docs'];

var dirString = directories.join();
console.log('dirString : ' + dirString);

var dirString2 = directories.join(path.sep);
console.log('dirString2 : ' + dirString2);

//가장 많이씀
var filePath = path.join('/Users/gukbong2', 'notepad.exe');
console.log('filePath : ' + filePath);




var dirname = path.dirname(filePath);
console.log('dirname : ' + dirname);

var basename = path.basename(filePath);
console.log('basename : ' + basename);

var extname = path.extname(filePath);
console.log('extname : ' + extname);



