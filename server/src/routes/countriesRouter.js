const { Router } = require("express");
const countriesRouter = Router();

const { getCountriesId, getCountriesName } = require("../handlers/countriesHandler");

countriesRouter.get("/", getCountriesName);
countriesRouter.get("/:idPais", getCountriesId);

module.exports = countriesRouter;