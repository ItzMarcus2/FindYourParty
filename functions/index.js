// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
const nodemailer = require('nodemailer');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require("firebase-admin");
admin.initializeApp();

exports.testMail = functions.https.onCall((req, res) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    scure: false,
    port: 25,
    auth: {
      user: '***********',
      pass: '***********'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let helperOptions = {
    from: '"****" <*****',
    to: '****',
    subject: 'Hello World',
    text: 'Hello, {{username}}, Your password is: {{ password }}',
    html: '<b>Hello, <strong>{{username}}</strong>, Your password is:\n<b>{{ password }}</b></p>'
  }

  transporter.sendMail(helperOptions, (error, info) => {
    if (error) {
      return res.status(404).send(error)
    }
    res.status(200).send('The mail was sent.');
  })
})

exports.halloWorld = functions.https.onCall((data, context) => {
  const text = data.text;
  return admin.database().ref('/callTest').push({
      text: text
  }).then(() => {
      return { text: text }
  })
});
