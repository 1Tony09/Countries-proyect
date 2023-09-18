const { getCountriesDb, countriesData, countryById, countryByName } = require("../controllers/countriesController");

const getCountriesName = async (req, res) => {
    try {
        const { name } = req.query;
        await countriesData();

        const countriesDb = await getCountriesDb();
        if(!countriesDb.length) {
            return res.status(503).send("Countries not found");
        }

        countriesDb = countriesDb.map(({id, name, flag, continent, capital, area, subregion, population, activities, }) => {
            return {
                flag, id, name, continent, capital, area, subregion, population, activities,
            };
        });

        if(name) {
            const countryName = await countryByName(name);

            if(!countryName.length) {
                return res.status(404).send("Country not found");
            } else {
                countryName = countryName.map((c) => {
                    return {
                        id: c.dataValues.id,
                        name: c.dataValues.name,
                        flag: c.dataValues.flag,
                        continent: c.dataValues.continent,
                        capital: c.dataValues.capital,
                        area: c.dataValues.area,
                        subregion: c.dataValues.subregion,
                        population: c.dataValues.population,
                        activities: c.dataValues.activities,
                    };
                });

                return res.status(200).json(countryName);
            }
        }

        res.status(200).json(countriesDb);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCountriesId = async (req,res) => {
    try {
        const { idPais } = req.params;
        const countryId = await countryById(idPais);

        if(!countryId) {
            return res.status(404).send("ID not found");
        }

        res.status(200).json(countryId);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getCountriesName, getCountriesId };