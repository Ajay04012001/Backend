const multer = require('multer');

const stoarage = multer.diskStorage({
    destination :'./src/public/upload',
filename: (req,file,cb) => {
    cb(null,file.originalname);
}
});

const maxSize = 1024 * 1024 * 5;

const filefilter = (req,file,cb) => {
    if(!file.mimetype.includes('jpeg') && !file.mimetype.includes('png')){
        return cb(null,false);
    }
    cb(null,true);
} 
const upload = multer({
    storage: stoarage,
    limits: {feildSize:maxSize},
    filefilter:filefilter
});
module.exports = {upload};