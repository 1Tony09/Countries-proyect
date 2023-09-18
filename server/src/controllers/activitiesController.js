const { Activity, Country } = require('../db');

const createActivity = async (name, difficulty, duration, season, country) => {
    try {
        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season,
        });

        const countriesById = await Country.findAll({ where: { id: country } });
        newActivity.addCountries(countriesById);
    
        return newActivity;
    } catch (error) {
        return error;
    }


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