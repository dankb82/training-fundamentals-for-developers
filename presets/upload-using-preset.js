require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('assets/images/mrwhiskers.jpg', {
  public_id: 'drwhiskers',
  upload_preset: 'c0cqxzqw'
})
.then(uploadResult => console.log(uploadResult))
.catch(error => console.error(error));
