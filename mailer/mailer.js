const express = require('express');
const bodyParser = require('body-parser');
const {join} = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.post("/send-mail", (req,res) => {
    // db logic goes here

    res.json({
        message: `Thanks! Your email has been sent to : ${req.body.email}`
    });
});

app.listen(process.env.PORT || 80, err => {
    if (err) throw err;
    console.log('mailer is running')
})