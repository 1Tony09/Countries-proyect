const { Activity, Country } = require('../db');

const createActivity = async (name, difficulty, duration, season) => {
    const newActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
    })

    return newActivity;
};

const getActivitiesDb = async () => {
    try {
        const activitiesDb = await Activity.findAll({
            include: { model: Country },
        });

        return activitiesDb;
    } catch (error) {
        return error;
    }
};

module.exports = { createActivity, getActivitiesDb };