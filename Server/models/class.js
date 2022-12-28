const Class = require("../schemas/class")
const Course = require("../schemas/course")




async function addClass(params) {

    const course = await Course.findOne({ where: { id: params.courseId } }).catch(() => { return false; })
    if (!course) {
        return { error: { status: 404, message: "course not found" } }
    }

    const addClass = await Class.create(params).catch((err) => { return { error: err } })
    if (addClass.error || !addClass) {
        return { error: { status: 500, message: addClass.error.message || "bad request" } }
    }

    return { data: addClass }

}

async function getClass() {
    const getClass = await Class.findAll().catch(() => { return false })
    if (!getClass) {
        return { error: { status: 404, message: "class not found" } }
    }
    return { data: getClass }
}

async function updateClass(params1, params2) {

    const getClass = await Class.findOne({ where: { id: params2 } }).catch((err) => { return false })
    if (!getClass) {
        return { error: { status: 404, message: "class not found" } }
    }

    const update = await Class.update(params1, { where: { id: params2 } }).catch((err) => { return { error: err } })
    if (update.error || !update) {
        return { error: { status: 403, message: update.error.message || "not update" } }
    }
    return { data: "update successfull" }
}



async function remove(param) {


    let classData = await Class.destroy({ where: { id: param } }).catch((err) => { return { error: err } })

    console.log(classData)
    if (!classData | (classData && classData.error)) {
        return { error: { status: 500, message: (classData.error) || "cant delete" } }
    }

    return { data: "classData" }

}

module.exports = {
    Class,
    classs: {
        addClass,
        getClass,
        updateClass,
        remove
    }
}