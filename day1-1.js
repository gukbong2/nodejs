/*jslint devel: true */

/* eslint-disable no-console */

/*eslint no-undef: "error"*/

/*eslint-env node*/




console.log('hello node~~!');

console.log('숫자입니다. %d', 10);

console.log('문자열입니다. %s', '안녕');


var person = {

    name: '방국봉',
    age: 26
};

console.log('json객체 출력. %j', person);

//객체 속성 확인
console.dir(person);



//소요시간 확인
console.time('duration_time');

var result = 0;

for (var i = 0; i < 10000; i++) {

    result += i;

}

console.timeEnd('duration_time');

console.log('파일이름 : %s', __filename);
console.log('경로 : %s', __dirname);















