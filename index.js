
const http = require("http");
const foo = require('./foo');
const server = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    var url = req.url;
    if (url === "/foo") {
        console.log(foo);
    } else if (url === "/bar") {
        res.write("<h1>bar<h1>");
        res.end();
    } else {
        res.write("<h1>Home!<h1>");
        res.end();
    }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server has been started on ${PORT}...`);
});
// const con = require('db_connection');
//   var sql = "select * from emails";
//   let data = [];
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query(sql, function (err, result) {

//         data = [{count : result.length, data : result}];
//         http.createServer(function (req, res) {
//             res.writeHead(200, {'Content-Type': 'application/json'});
//             res.write(data);
//             return res.end();
//         });
//         // if (err) throw err;
//         //     console.log("Result: " + result);
//         });
//   });
/* Promise resole asynchronous problem */
// let a = 10;
// let b = 0;
// let c = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(30)
//     }, 2000)
// })
// c.then((c)=>{
//     console.log(a+c);
// });



//var fs = require('fs');

// fs.writeFile('data.js', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });
/*rename file*/
// fs.rename('data1.js', 'data.js', function (err) {
//     if (err) throw err;
//     console.log('File Renamed!');
//   });
/* File open */
// var fs = require('fs');
// fs.open('data.js', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });
/* Add content in file*/
// var fs = require('fs');
// fs.appendFile('data.js', ',[{name:akhilesh, email:akhilesh@gmail.com}]', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });
/* Read file by code*/
// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('data.js', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);
/* work with folder system */
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'test');
// fs.readdir(dirPath, (error, files)=>{
//     files.forEach((item)=>{
//         console.log(item);
//     })
// });
/*create files*/
// for(i=0;i<5;i++) {
//     fs.writeFileSync(dirPath+`/hello`+i+`.txt`,`this is sample$(i)`);
// }
// const folderName = 'test';
// try {
//   if (!fs.existsSync(folderName)) {
//     fs.mkdirSync(folderName);
//   } else {
//     fs.writeFileSync(''+folderName+'/test.txt', "this is test file");
//   }
// } catch (err) {
//   console.error(err);
// }
/*Work with file*/
// const fs = require('fs');
// const input = process.argv;
// if(input[2] == 'add') { 
//     fs.writeFileSync(input[3], input[4]);
// } else if(input[2] == 'remove') {
//     fs.unlinkSync(input[3]);
// } else {
//     console.log('wrong input');
// }
/* GET VALUE from command line */
// console.log(process.argv);
// const http = require('http');
// const data = require('./data');
// http.createServer((req, resp) => {
//     resp.writeHead(200, {'content-Type':'application\json'});
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen('4500')
// const chalk = require('chalk');

// console.log(chalk.blue('Hello world! some '));
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