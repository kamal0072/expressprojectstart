import { stuControllers,
        getAllstudents,
        createUser
} from '../controllers/students.js';

import express from 'express'
const app = express()


// function for Students only
app.get('/stu/:userId', stuControllers);
app.get('/getstu', getAllstudents);
app.get('/createstu', createUser);


export default app