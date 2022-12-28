const multer = require('multer')

// let upload = function (req, res, filename) {
//     let storage = multer.diskStorage({
//         destination: "public/uploads",
//         filename: (req, file, cb) => {
//             cb(null, file.originalname)
//         }
//     })

//     let uploads = multer({ storage }).single(filename)
//     return new Promise((resolve, reject) => {
//         uploads(req, res, (err) => {
//             if (err) {
//                 reject(err)
//             }
//             resolve(req.file)
//         })
//     })
// }




//  Data with multiple fields

let upload = function (req, res, filename) {
    let storage = multer.diskStorage({
        destination: "public/uploads",
        filename: (req, file, cb) => {
            cb(null, file.originalname)
        }
    })

    let uploads = multer({ storage }).fields(filename)
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