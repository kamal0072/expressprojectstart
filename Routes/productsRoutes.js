import { singlePro, allPro, brandpro } from '../controllers/products.js';
import express from 'express'
const app = express()

// function for Products only
app.get('/singlepro', singlePro);
app.get('/allpro', allPro);
app.get('/brandpro', brandpro);

// module.exports = app;
export default app;

