const { Router } = require("express");
const countriesRouter = Router();

const { getCountriesId, getCountriesName } = require("../handlers/countriesHandler");

countriesRouter.get("/:id", getCountriesId);
countriesRouter.get("/", getCountriesName);

module.exports = countriesRouter;