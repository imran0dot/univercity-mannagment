import express, {Request, Response} from 'express';
import cors from 'cors';
import { userRouts } from './app/models/user/user.route';
import { StudentRoutes } from './app/models/student/student.rout';
import sendResponse from './app/utils/sendResponse';
import httpStatus from 'http-status';
import { TeacherRoutes } from './app/models/teacher/teacher.route';

const app = express();

// parsers 
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('working')
})

// application routs 
app.use('/api/v1/students', StudentRoutes)
app.use('/api/v1/users', userRouts)
app.use('/api/v1/teachers', TeacherRoutes);


//not found route
app.get('*', (req: Request, res: Response) => {
    sendResponse(res, {
        success: false,
        data: '',
        message: 'no route found',
        statusCode: 404,
    })
})

export default app;