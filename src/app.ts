import express from 'express';
import cors from 'cors';
import { userRouts } from './app/models/user/user.route';
import { StudentRoutes } from './app/models/student/student.rout';
import { TeacherRouter } from './app/models/teacher/teacher.route';

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
app.use('api/v1/teacher', TeacherRouter);


export default app;