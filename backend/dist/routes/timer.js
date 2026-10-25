"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timerRouter = void 0;
const express_1 = require("express");
const timerController_1 = require("../controllers/timerController");
exports.timerRouter = (0, express_1.Router)();
exports.timerRouter.get('/sessions', timerController_1.listSessions);
exports.timerRouter.post('/sessions', timerController_1.createSession);
exports.timerRouter.patch('/sessions/:id/end', timerController_1.endSession);
