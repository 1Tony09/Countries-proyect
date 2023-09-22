const { Router } = require('express');

const activitiesRouter = Router();

const { createActivityHandler, getActivitiesHandler } = require("../handlers/activitiesHandler");

activitiesRouter.post("/create", createActivityHandler);
activitiesRouter.get("/", getActivitiesHandler);

module.exports = activitiesRouter;