const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));
/*example of arrow function */
// const test = (a) => {
//     return a * 10;
// }
// console.log(test(1));
// const http = require('http');
/* example of function */
// function dataControll(req, resp)
// {
//     resp.write('this is test for test response');
//     resp.end();
// }
/* example of server */
// http.createServer(dataControll).listen(4500);
// http.createServer((req, resp)=>{
//     resp.write('this is test response');
//     resp.end();
// }).listen(4500);

// import {x} from './app';
// const app = require('./app');
// const fs = require('fs');
// var a = 1;
// var b = 2;
// let c = 3;
// const arr = [1,2,3,4,5,6,7,8];
// arr.forEach(element => {
//     console.log(element);
// }); 
// console.log('==>>',__dirname);
// console.log('==>>',__filename);
// console.log(app.x);
// fs.writeFileSync('hello.txt','Code Step by step');
// console.log(a+b+c);