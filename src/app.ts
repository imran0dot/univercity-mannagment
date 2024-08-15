import express from 'express';
import cors from 'cors';
import { userRouts } from './app/models/user/user.route';
import { StudentRoutes } from './app/models/student/student.rout';
import { TeacherRoutes } from './app/models/teacher/teacher.route';
import global_error_handler from './app/middlewares/global_error_handler';
import not_found_handler from './app/middlewares/not_found_handler';

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
app.get('*', not_found_handler)

// global error handler 
app.use(global_error_handler)
export default app;