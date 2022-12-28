const multer = require('multer')



let upload = function (req, res, filename) {
    let storage = multer.diskStorage({
        destination: "public/uploads",
        filename: (req, file, cb) => {
            cb(null, file.originalname)
        }
    })

    let uploads = multer({ storage }).array(filename)
    return new Promise((resolve, reject) => {
        uploads(req, res, (err) => {
            if (err) {
                reject(err)
            }
            resolve(req.files)
        })
    })
}


module.exports = upload