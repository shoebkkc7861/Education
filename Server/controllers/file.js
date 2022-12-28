const Files = require("../schemas/file")

const upload = require('../middleware/multer/file')
const path = require('path')

fileObj = {}

fileObj.addFiles = async (req, res, next) => {
    let fieldName = [
        {
            name: "photo",
            maxCount: 1
        },
        {
            name: "leavingCertificate",
            maxCount: 1
        },
        {
            name: "birthCertificate",
            maxCount: 1
        },
        {
            name: "aadharCard",
            maxCount: 2
        },
        {
            name: "markSheet",
            maxCount: 1
        }
    ]
    let files = await upload(req, res, fieldName)
        .catch(err => console.log(err))
    console.log(files)



    let addFile = await Files.create({
        userId: req.body.userId,
        photo: files.photo[0].path,
        leavingCertificate: files.leavingCertificate[0].path,
        birthCertificate: files.birthCertificate[0].path,
        aadharCard: files.aadharCard[0].path,
        markSheet: files.markSheet[0].path
    }).catch((err) => { return { error: err } })

    if (addFile.error) {
        return res.status(500).send(addFile.error.message)
    }
    return res.status(200).json({ status: true, files })
}



module.exports = fileObj

