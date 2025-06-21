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
        console.log(hash)
    });
    /*Store hash in your db*/
});


//END_ASYNC

//START_SYNC


var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log(hash);
var result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log(result);
//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});