// function for Cats only
import { getAllCats, getSingleCat } from "../controllers/catsController.js";
import express from 'express'
const app = express()

app.get('/allcats', getAllCats);
app.get('/singlecat/:catId/:catName', getSingleCat);

export default app


