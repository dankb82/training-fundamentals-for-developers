require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.add_tag(['medical', 'drug'], ['prescrip2', 'prescrip'])
  .then(uploadResult => console.log(uploadResult))
  .catch(error => console.error(error));