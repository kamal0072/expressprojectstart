const today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; // Month is 0-indexed, so add 1
const yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
}
if (mm < 10) {
    mm = '0' + mm;
}
const formattedDate = dd + '/' + mm + '/' + yyyy;

const singlePro = (req, res) => {
    res.send("Single Product");
}
const allPro = (req, res) => {
    res.send("All Products");
}

const brandpro = (req, res) => {
    res.send("Brand Products");
};

export { singlePro, allPro, brandpro };

