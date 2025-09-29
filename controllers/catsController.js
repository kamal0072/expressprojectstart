import {join } from 'path'
// controller for cats
const getAllCats = (req, res) => {
    const arr = [12, 34, "python", true, "javascript", false];
    res.sendFile(join(process.cwd(), 'views', 'cats.html'), {arr});
};

const getSingleCat = (req, res) => {
    const {catId, catName} = req.params;
    console.log(catId, catName);
    res.sendFile(join(process.cwd(), 'views', 'cats.html'), {catId, catName});
};
export { getAllCats, getSingleCat };
