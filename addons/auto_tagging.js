require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('https://www.bostonglobe.com/resizer/-z1EfcVeMRvMuiY8CGbe6-qaAJk=/420x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/LZWINHE7RQI6TBTCTP6SHM4H5A.jpg', {
        categorization: 'aws_rek_tagging',
        auto_tagging: 0.7
    })
    .then(uploadResult => console.log(JSON.stringify(uploadResult, null, 2)))
    .catch(error => console.error(error));