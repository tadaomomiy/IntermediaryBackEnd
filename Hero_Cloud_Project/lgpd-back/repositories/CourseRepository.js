import Course from "../models/Course.js";

const saveCourse = async (CourseModel) => {
    const save = await Course.create(CourseModel);
    return save;
}

const getAllCourse = async () => {
    return await Course.finAll({
        order: [
            ['id', 'ASC']
        ]
    });
};

const getCourseById = async (id) => {
    return await Course.findByPk(id);
};

const deleteCourseById = async (id) => {
    return await Course.destroy({where: {id: id}});
};

const updateCourseById = async(id, CourseModel) => {
    try {
        const result = await Course.update(CourseModel, {where: {id: id}});
        if (result[0]===1) {
            return {message: "Course update with sucess"};
        } else {
            return {message: `Cannot find ${id} to update`, status: 404};
        }
    } catch (error){
        console.error()
    }
};


const factory = {
    saveCourse,
    getAllCourse,
    getCourseById,
    deleteCourseById,
    updateCourseById
}

export default factory;