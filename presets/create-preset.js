require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.api.create_upload_preset({
  name: 'my_awesome_preset',
  unsigned: false,
  tags: ['cat', 'animals'],
  folder: 'cute_animals',
  allowed_formats: 'jpg, png'
})
.then(uploadResult => console.log(uploadResult))
.catch(error => console.error(error));