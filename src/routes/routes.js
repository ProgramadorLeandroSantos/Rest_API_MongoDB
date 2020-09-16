//imports
const express = require('express');
const routes = express.Router();
const mongoose = require('mongoose');
const StudentController = require('../controller/StudentController');


routes.post('/students', StudentController.Create);
routes.get('/students', StudentController.Read);
routes.get('/students/:id', StudentController.ReadOne);
routes.put('/students/:id', StudentController.Update);
routes.delete('/students/:id', StudentController.Destroy);

module.exports = routes;