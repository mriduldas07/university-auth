"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const http_status_1 = __importDefault(require("http-status"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const routes_1 = __importDefault(require("./app/routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
//parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//application routes
app.use('/api/v1', routes_1.default);
// app.use('/api/v1/users', userRouter);
// app.use('/api/v1/academic-semester', academicSemesterRoutes);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
//global error handler
app.use(globalErrorHandler_1.default);
// handle not found
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: 'Not found!!!',
        errorMessages: [
            {
                path: req.originalUrl,
                message: 'Api not found',
            },
        ],
    });
    next();
});
// const academicSemester = {
//   year: '2025',
//   code: '01',
// };
// const id = async () => {
//   const stuId = await genarateFacultyId();
//   console.log(stuId);
// };
// id();
exports.default = app;
