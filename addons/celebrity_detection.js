require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('https://www.jambase.com/wp-content/uploads/2016/09/Phish-2016-Press-Crop-1480x779.jpg', {
        detection: 'aws_rek_face',
        auto_tagging: 0.7
    })
    .then(uploadResult => console.log(JSON.stringify(uploadResult, null, 2)))
    .catch(error => console.error(error))