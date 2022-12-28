const Course = require("../schemas/course")



async function addCourse(params = {}) {
    let course = await Course.create(params).catch((err) => { return { error: err } })
    if (course.error) {
        return { error: { status: 401, message: course.error.message } }
    }
    return { data: course }
}

async function getAll() {
    let course = await Course.findAll({ attributes: ["courseName", "id"] }).catch((err) => { return { error: err } })
    if (course.error) {
        return { error: { status: 404, message: "data not found" } }
    }
    return { data: course }
}



async function update(param1, param2) {
    let courseData = await Course.update(param1, { where: { id: param2 } }).catch((err) => { return { error: err } })

    if (!courseData || (courseData && courseData.error)) {
        return { error: { status: 400, message: courseData.error.message || "cant create course" } }
    }
    return { data: "info updated " }
}

async function remove(param) {
    let courseData = await Course.destroy({ where: { id: param } }).catch((err) => { return { error: err } })

    if (!courseData || (courseData && courseData.error)) {
        return { error: { status: 400, message: courseData.error.message || "cant create course" } }
    }
    return { data: "info updated " }
}


module.exports = {
    Course,
    course: {
        addCourse,
        getAll,
        update,
        remove
    }
}