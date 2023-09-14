const { Activity } = require('../db');

const createActivity = async (id, name, difficulty, duration, season) => {
    const newActivity = await Activity.create({id,
        name,
        difficulty,
        duration,
        season,
    })

    return newActivity;
};

const getActivitiesDb = async () => {
    const  activitiesDb = await findAll();
    return activitiesDb;
};

module.exports = { createActivity, getActivitiesDb };