import express from 'express';
let router = express.Router();

import teacherService from '../services/TeacherService.js';

router.post("/addTeacher",async function(req, res) {
    const teacherModel = {
        name: req.body.name
    }

    const teacher = await teacherService.saveTeacher(teacherModel);
    return res.status(200).json(teacher);
});

router.get("/getAllTeacher", async function(req, res) {
    const allTeacher = await teacherService.getAllTeacher();
    return res.status(200).json(allTeacher);
})

router.get("/teacher/:id", async function(req, res){
    const teacher = await teacherService.getTeacherById(req.params.id);
    return res.status(200).json(teacher);
})

router.delete("/deleteTeacher/:id", async function(req, res){
    const teacher = await teacherService.deleteTeacherById(req.params.id);
    return res.status(200).json(teacher);
})

router.put("/updateTeacher/:id",async function(req, res) {
    const teacherModel = {
        name: req.body.name
    }

    const updateTeacher = await teacherService.updateTeacherById(req.params.id, teacherModel);
    return res.status(200).json(updateTeacher);
});

export default router;