const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { userInfo } = require('os');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
require('./routes')(app);

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://0.0.0.0:27017',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const con = mongoose.connection;
con.on('open',() => {
    console.log("server is connected");
})

//  app.get('/', function (req, res) {
//   res.send('Hey iam learning nodejs')
//  })
//  app.get('/about_us', (req, res) => {
//     res.send('This is about us page')
//   })
//   app.post('/add', (req, res) => {
//     res.send('POST request to the homepage')
//   })

app.listen(3000, () => {
    console.log('listening on 3000');
})
// const fs = require("fs");
// const path = require("path");
// const a = require("./demo");
// const newfile = path.join(process.cwd(), "file.txt");
// fs.writeFileSync(newfile, "this is my new file!!!!");
// const a = fs.readFileSync(newfile);
// console.log(a);

// function myFun(){
// console.log("i am a function");
// }
// myFun();

