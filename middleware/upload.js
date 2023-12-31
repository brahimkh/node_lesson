const path   = require ('path')
const multer = require ('multer')


var storageImage = multer.diskStorage({
    destination: function (req,file,cb){
        cb (null, 'uploads/')
    },
    filename:function (req, file, cb){
          let ext =path.extname(file.originalname)
          cb(null,Date.now() + ext)

    }
   
}

)
/// messageddd
var upload =multer ({
    storage:storageImage,
    fileFilter: function (req, file, callback){
        if(
             file.mimetype == "image/png" ||
            file.mimetype == "image/jpg"
        ){
            callback(null,true)
        }else{
            console.log ('Only jng & png file support')
            callback(null,false)

        }
    },
    limits:{
      fileSize: 1024 * 1024 *2 
    }
})

module.exports =upload