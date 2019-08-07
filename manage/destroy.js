require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.destroy('super-cute-kitten')
  .then(uploadResult => console.log(uploadResult))
  .catch(error => console.error(error));