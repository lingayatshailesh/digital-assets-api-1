var express = require('express');
var router = express.Router();
let DAC = require("../controller/digital-assets")
let UC = require("../controller/user")
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

router.post('/upload' , upload.single('document') , UC.sequre ,DAC.digitalAssetsUpload);

router.get('/alldata' , UC.sequre ,DAC.digitalAssetsAlldata);

router.get('/:id' , UC.sequre ,DAC.digitalAssetsFound);

router.patch('/:id' , UC.sequre ,DAC.digitalAssetsUpdate);

router.delete('/:id' , UC.sequre ,DAC.digitalAssetsDelete);

module.exports = router;
