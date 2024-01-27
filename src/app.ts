import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import router from './app/routes';
const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

//application routes
app.use('/api/v1', router);
// app.use('/api/v1/users', userRouter);
// app.use('/api/v1/academic-semester', academicSemesterRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//global error handler
app.use(globalErrorHandler);

// handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
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

export default app;
