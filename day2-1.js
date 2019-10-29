/*jslint devel: true */

/* eslint-disable no-console */

/*eslint no-undef: "error"*/

/*eslint-env node*/

var testcalc = {};

testcalc.add = function (a, b) {

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


var name;
name = '양금모';
console.log('name : ' + name);

var age = 22;
console.log('age :' + age);

var person = {};

person['name'] = '방국봉';
person['age'] = 26;
console.log(person);

function add(a, b) {
    return a + b;

}

var result = add(10, 10);

console.log("result : " + result);



var person = {
    name: '박비듬',
    age: 21,
    add: function (a, b) {
        return a + b;
    }
};

console.log('person.add : ' + person.add(30, 50));



var names = ['조까치', '나쌍년', '방국봉'];

var users = [{name : '조까치', age : 20}, {name : '나쌍년', age : 15}];

users.push({name : '방국봉', age : 26 });

console.log('users count : ' + users.length);

console.log('user 첫번째 사용자 이름 : '  + users[0].name);
console.log('user 첫번째 사용자 나이 : '  + users[0].age);

var users2 = [{name : '조까치', age : 20}, {name : '나쌍년', age : 15}];

var oper = function(a, b) {
    return a + b;
}

users2.push(oper);

console.dir(users2);
console.log('세번째 배열 요소를 함수로 실행 : ' + users2[2](10, 10) );


