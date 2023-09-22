import express, { json } from 'express';
import path from 'path';
import nunjucks from 'nunjucks';
import bodyParser from 'body-parser';
import fs from 'fs';

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
import * as mysql from 'mysql';
const connection = mysql.createConnection({
  host     : 'sparta.cbt9ceqjwlr9.ap-northeast-2.rds.amazonaws.com',
  user     : 'sparta_student',
  password : 'sparta99',
  database : 'sparta'
});

connection.connect();

connection.end();

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
    const date = req.body.date;

    //데이터 저장
    //data/writing.json 안에 글 내용이 저장
    const fileData = fs.readFileSync(filePath);
    // console.log(fileData)

    const writings = JSON.parse(fileData);
    // console.log(writings)

    //requst 데이터를 저장
    writings.push({
        'title':title,
        'contents':contents,
        'date': date
    })

    //data/wrigint.json 에 저장하기
    fs.writeFileSync(filePath,JSON.stringify(writings))

    res.render('detail', { 'detail': { title: title, contents: contents, date: date } });
});

app.get('/detail', async (req, res) => {
    res.render('detail');
})

app.listen(3000, () => {
    console.log('Server is running');
});