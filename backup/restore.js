require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.api.restore(['jgp6jwdzn8mcmtcw9q7w'])
.then(restoreResult => console.log(restoreResult))
.catch(error => console.error(error));