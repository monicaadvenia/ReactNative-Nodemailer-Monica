// const nodemailer= require('nodemailer');
// const xoauth2= require('xoauth2');
// const express= require('express');
// const app= express();

// var transporter= nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         type: 'OAuth2',
//         user: 'monica.advenia@gmail.com',
//         clientId: '917288913250-sf9k20dhckdetg1339u0fetb4msks4n5.apps.googleusercontent.com',
//         clientSecret: 'uBhrh-qomfcMx_a3ufn7Df6N',
//         refreshToken: '1/PDO09B9bDwEKP6A9tlFCdGmbHQjLvJBuKgLdePXHLJJvtTkdMkQ7plXRIaxrG44H'
//     }
// })

// var mailOptions= {
//     from: 'TesNode JS <wkwk@haha.com>',
//     to: 'monica_advenia@yahoo.com',
//     subject: 'TesEmail NodeJS',
//     text: 'Halo Dunia!',
//     html: '<h1><i>IniEmail yagaes!</i></h1>'}

// app.get('/', (req, res)=>{
//     transporter.sendMail(mailOptions, (err, res2) =>{
//         if(err){
//             console.log('Error gan!');
//             res.send('Error Gan!');
//         } else {
//             console.log('Email sukses terkirim');
//             res.send('Email sukses terkirim!')
//         }
//     })
// })

// app.listen(3210, ()=>{
//     console.log('Run @3210')
// })

// //TEST 1
// const nodemailer= require('nodemailer');
// const xoauth2= require('xoauth2');

// const express= require('express');
// const app = express();

// const bodyParser = require('body-parser');
// const cors = require('cors');

// app.use(bodyParser.json());
// app.use(cors());

// var transporter= nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         type: 'OAuth2',
//         user: 'monica.advenia@gmail.com',
//         clientId: '917288913250-sf9k20dhckdetg1339u0fetb4msks4n5.apps.googleusercontent.com',
//         clientSecret: 'uBhrh-qomfcMx_a3ufn7Df6N',
//         refreshToken: '1/PDO09B9bDwEKP6A9tlFCdGmbHQjLvJBuKgLdePXHLJJvtTkdMkQ7plXRIaxrG44H'
//     }
// })

// app.post('/data', function(req, res){
//     console.log(req.body);

//     var mailOptions= {
//         from: 'TesNode JS <wkwk@haha.com>',
//         to: req.body.addresEmail,
//         subject: req.body.subjectEmail,
//         text: 'Halo Dunia!',
//         html: `<p>${req.body.messagesEmail}</p>`
//     }

//     transporter.sendMail(mailOptions, (err, res2) =>{
//         if(err){
//             console.log('Error gan!');
//             res.send('Error Gan!');
//         } else {
//             console.log('Email sukses terkirim');
//             res.send('Email sukses terkirim!')
//         }
//     })
// });

// app.listen(3210, ()=>{
//     console.log('Run @3210')
// })

// TEST 2
const express= require('express');
const app= express();

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const nodemailer= require('nodemailer');
const xoauth2= require('xoauth2');

var transporter= nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'monica.advenia@gmail.com',
        clientId: '917288913250-sf9k20dhckdetg1339u0fetb4msks4n5.apps.googleusercontent.com',
        clientSecret: 'uBhrh-qomfcMx_a3ufn7Df6N',
        refreshToken: '1/PDO09B9bDwEKP6A9tlFCdGmbHQjLvJBuKgLdePXHLJJvtTkdMkQ7plXRIaxrG44H'
    }
})

app.get('/data', (req, res)=>{
    console.log(req.body.addressEmail)

    var mailOptions= {
        from: 'TesNode JS <wkwk@haha.com>',
        // to: 'monica_advenia@yahoo.com',
        to: req.body.addressEmail,
        subject: 'TesEmail Ujian',
        text: 'Halo Dunia!',
        html: '<h1><i>Ini ngetes</i></h1>'}

    transporter.sendMail(mailOptions, (err, res2) =>{
        if(err){
            console.log('Error gan!');
            res.send('Error Gan!');
        } else {
            console.log('Email sukses terkirim');
            res.send('Email sukses terkirim!')
        }
    })
})

app.listen(3210, ()=>{
    console.log('Run @3210')
})