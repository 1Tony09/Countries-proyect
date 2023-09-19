const { Country, Activity, Op } = require("../db");
const axios = require("axios");

const countriesData = async() => {
    try {
        const countries = await getCountriesDb();
        if(countries.length < 200) {
            const response = await axios.get("http://localhost:5000/countries");
            
            let countryOrganized = response.data.map((c) => {
                return {
                    id: c.cca3,
                    name: c.name.official,
                    flag: c.flags[1],
                    continent: c.continents.toString(),
                    capital: c.capital ? c.capital.toString() : "-",
                    subregion: c.subregion ? c.subregion : "-",
                    area: c.area,
                    population: c.population,
                };
            });

            await Country.bulkCreate(countryOrganized, { validate: true });
        }
    } catch (error) {
        return error;
    }
};

const getCountriesDb = async () => {
    try {
        const countriesDb = await Country.findAll({
            include: { model: Activity },
        });
        return countriesDb;
    } catch (error) {
        return error;
    }
};


const countryById = async(id) => {
    try {
        const country = await Country.findByPk(id, {
            include: { model: Activity },
        });

        return country;
    } catch (error) {
        return error;
    }
};

const countryByName = async(name) => {
    try {
        const country = await Country.findAll({
            where: {
                name: { [Op.iLike]: `%${name}` },
            },
        });

        return country;
    } catch (error) {
        return error;
    }
};

module.exports = { getCountriesDb, countriesData, countryById, countryByName };