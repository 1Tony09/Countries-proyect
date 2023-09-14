const { createActivity, getActivitiesDb } = require("../controllers/activitiesController");

const createActivityHandler = async (req, res) => {
    try {
        const {id, name, difficulty, duration, season} = req.body;

        const response = await createActivity(id, name, difficulty, duration, season)

        res.status(201).json(response);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
};

const getActivitiesHandler = async (req, res) => {
    try {
        const response = await getActivitiesDb();

        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = { createActivityHandler, getActivitiesHandler };