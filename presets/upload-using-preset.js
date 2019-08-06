require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('assets/images/mrwhiskers.jpg', {
  public_id: 'mrswhiskers',
  upload_preset: 'my_awesome_preset'
})
.then(uploadResult => console.log(uploadResult))
.catch(error => console.error(error));
