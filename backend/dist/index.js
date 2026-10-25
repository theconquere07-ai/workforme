"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const health_1 = require("./routes/health");
const projects_1 = require("./routes/projects");
const notes_1 = require("./routes/notes");
const analyzer_1 = require("./routes/analyzer");
const timer_1 = require("./routes/timer");
const auth_1 = require("./middleware/auth");
const errorHandler_1 = require("./middleware/errorHandler");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
}));
app.use(express_1.default.json({ limit: '10mb' }));
// Public routes
app.use('/api/health', health_1.healthRouter);
// Protected routes
app.use('/api', auth_1.authMiddleware);
app.use('/api/projects', projects_1.projectsRouter);
app.use('/api/notes', notes_1.notesRouter);
app.use('/api/analyzer', analyzer_1.analyzerRouter);
app.use('/api/timer', timer_1.timerRouter);
app.use(errorHandler_1.errorHandler);
app.listen(PORT, () => {
    console.log(`JARVIS backend running on port ${PORT}`);
});
exports.default = app;
