// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
const nodemailer = require('nodemailer');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require("firebase-admin");
admin.initializeApp();

exports.testMail = functions.https.onCall((req, res) => {
  let transporter = nodemailer.createTransporter({
    service: 'gmail',
    scure: false,
    port: 25,
    auth: {
      user: 'itzmarcusyout@gmail.com',
      pass: 'Marcus2001DK!'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let helperOptions = {
    from: '"Marcus Klitgaard" <itzmarcusyout@gmail.com',
    to: 'marcus@klitgaard.de',
    subject: 'Hello World',
    text: 'Wow this is working'
  }

  transporter.sendMail(helperOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('The mail was sent');
    console.log(info);
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
