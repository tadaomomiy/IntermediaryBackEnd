import express from 'express';
let router = express.Router();

import evaluationService from '../services/EvaluationService.js';

router.post("/addEvaluation",async function(req, res) {
    const evaluationModel = {
        concept: req.body.concept
    }

    const evaluation = await evaluationService.saveEvaluation(evaluationModel);
    return res.status(200).json(evaluation);
});

router.get("/getAllEvaluation", async function(req, res) {
    const allEvaluation = await evaluationService.getAllEvaluation();
    return res.status(200).json(allEvaluation);
})

router.get("/evaluation/:id", async function(req, res){
    const evaluation = await evaluationService.getEvaluationById(req.params.id);
    return res.status(200).json(evaluation);
})

router.delete("/deleteEvaluation/:id", async function(req, res){
    const evaluation = await evaluationService.deleteEvaluationById(req.params.id);
    return res.status(200).json(evaluation);
})

router.put("/updateEvaluation/:id",async function(req, res) {
    const evaluationModel = {
        concept: req.body.concept
    }

    const updateEvaluation = await evaluationService.updateEvaluationById(req.params.id, evaluationModel);
    return res.status(200).json(updateEvaluation);
});

export default router;