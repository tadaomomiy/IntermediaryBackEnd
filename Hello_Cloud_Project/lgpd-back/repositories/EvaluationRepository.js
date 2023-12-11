import Evaluation from "../models/Evaluation.js";

const saveEvaluation = async (EvaluationModel) => {
    const save = await Evaluation.create(EvaluationModel);
    return save;
}

const getAllEvaluation = async () => {
    return await Evaluation.finAll({
        order: [
            ['id', 'ASC']
        ]
    });
};

const getEvaluationById = async (id) => {
    return await Evaluation.findByPk(id);
};

const deleteEvaluationById = async (id) => {
    return await Evaluation.destroy({where: {id: id}});
};

const updateEvaluationById = async(id, EvaluationModel) => {
    try {
        const result = await Evaluation.update(EvaluationModel, {where: {id: id}});
        if (result[0]===1) {
            return {message: "Evaluation update with sucess"};
        } else {
            return {message: `Cannot find ${id} to update`, status: 404};
        }
    } catch (error){
        console.error()
    }
};

const factory = {
    saveEvaluation,
    getAllEvaluation,
    getEvaluationById,
    deleteEvaluationById,
    updateEvaluationById
}

export default factory;