import express from 'express'
const app = express()
import student from './Routes/studentsRoutes.js'
import products from './Routes/productsRoutes.js'
import cats from './Routes/cats.js';

import dotenv from 'dotenv'
dotenv.config();
const PORT = process.env.PORT||5555; //  process.env.PORT;

// loading public folder
app.use(express.static('public'));

// base Route path for Students
app.use("/student", student);

// base Route path for Products
app.use("/product", products);

// base Route path for cats 
app.use('/cats', cats);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

