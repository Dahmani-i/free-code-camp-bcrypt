'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fccTesting = require('./freeCodeCamp/fcctesting.js');
const app = express();
app.use(cors({ origin: '*' }));
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';
const bcrypt = require('bcrypt');
//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
        console.log(res)
    });
    /*Store hash in your db*/
    return hash
});


//END_ASYNC

//START_SYNC



//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});