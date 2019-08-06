require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('https://media.mnn.com/assets/images/2018/09/eastern-box-turtle-forest.jpg.1080x0_q100_crop-scale.jpg')
    .then(uploadResult => console.log(uploadResult))
    .catch(error => console.error(error));
