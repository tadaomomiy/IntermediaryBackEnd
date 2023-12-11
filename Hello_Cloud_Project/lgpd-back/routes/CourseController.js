import express from 'express';
let router = express.Router();

import courseService from '../services/CourseService.js';

router.post("/addCourse",async function(req, res) {
    const courseModel = {
        name: req.body.name
    }

    const course = await courseService.saveCourse(courseModel);
    return res.status(200).json(course);
});

router.get("/getAllCourse", async function(req, res) {
    const allCourse = await courseService.getAllCourse();
    return res.status(200).json(allCourse);
})

router.get("/course/:id", async function(req, res){
    const course = await courseService.getCourseById(req.params.id);
    return res.status(200).json(course);
})

router.delete("/deletecourse/:id", async function(req, res){
    const course = await courseService.deleteCourseById(req.params.id);
    return res.status(200).json(course);
})

router.put("/updateCourse/:id",async function(req, res) {
    const courseModel = {
        name: req.body.name
    }

    const updateCourse = await courseService.updateCourseById(req.params.id, courseModel);
    return res.status(200).json(updateCourse);
});


export default router;