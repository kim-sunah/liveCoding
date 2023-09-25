import express, { json } from 'express';
import path from 'path';
import nunjucks from 'nunjucks';
import bodyParser from 'body-parser';
import fs from 'fs';
// let database = firebase.database();

const __dirname = path.resolve();

const app = express();

//file path
const filePath = path.join(__dirname,'data','writing.json');

// body parser set
app.use(bodyParser.urlencoded({ extended: false })); // express 기본 모듈 사용
app.use(bodyParser.json());

// view engine set
app.set('view engine', 'html'); // main.html -> main(.html)

// nunjucks
nunjucks.configure('views', {
    watch: true, // html 파일이 수정될 경우, 다시 반영 후 렌더링
    express: app
})

//mysql 연결
// const mysql      = require('mysql');
// import * as mysql from 'mysql';
// const connection = mysql.createConnection({
//   host     : 'sparta.cbt9ceqjwlr9.ap-northeast-2.rds.amazonaws.com',
//   user     : 'sparta_student',
//   password : 'sparta99',
//   database : 'sparta'
// });

// connection.connect();
// connection.end();

// middleware
// main page GET
app.get('/', async (req, res) => {
    const fileData = fs.readFileSync(filePath);
    const writings =JSON.parse(fileData);
    console.log(writings)
    res.render('main',{list:writings});
});

app.get('/write', (req, res) => {
    res.render('write');
});

app.post('/write', async (req, res) => {
    const title = req.body.title;
    const contents = req.body.contents;
    // const date = req.body.date;

    //데이터 저장
    const writing = new Writing({
        title : title,
        contents : contents
})
const result = await writing.save().then(()=>{
    console.log('Success')
    res.render('detail',{title:title, contents:contents});
}).catcg((error)=>{
    console.error(err)
    res.render('write')
})

    res.render('detail', { 'detail': { title: title, contents: contents, date: date } });
});

app.get('/detail', async (req, res) => {
    res.render('detail');
})

app.listen(3000, () => {
    console.log('Server is running');
});