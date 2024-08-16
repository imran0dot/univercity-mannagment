import express from 'express';
import cors from 'cors';
import global_error_handler from './app/middlewares/global_error_handler';
import not_found_handler from './app/middlewares/not_found_handler';
import { router } from './router';

const app = express();

// parsers 
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('working')
})

// application routs 
app.use('/api/v1/', router);


//not found route
app.get('*', not_found_handler)

// global error handler 
app.use(global_error_handler)
export default app;