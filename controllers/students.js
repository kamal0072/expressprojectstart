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


// Get all users
const getAllstudents = (req, res) => {
    res.json({
        message: `Fetching users created on ${formattedDate}`,
        data: {
            'ALexa': "alexa@gmail.com",
            'John': "john@gmail.com",
            'Peter': "peter@gmail.com",
            'Mark': "mark@gmail.com",
            'Paul': "paul@gmail.com",
            'name': "alexa@gmail.com",
            roll: 120,
            price: 12000,
            model: "Samsung",
            date : formattedDate,
        },

    });
};
const stuControllers = (req, res) => {
    const userId = req.params.userId;
    console.log(userId)
    // res.json({ message: `Fetching user with ID ${userId}` });
    res.send(`
        <ul>
            <li>my Name is Peter..</li>
            <li>Id : ${100}</li>
            <li>Price : ${12000}</li>
            <li>Phone : Samsung</li>
            <li>UserId : ${userId}</li>
        </ul>
        `);
};
// Create new user
const createUser = (req, res) => {
    const { name, email } = { name: 'alexa', email: "alexa@gmail.com" };
    res.json({
        message: "User created successfully", data:
        {
            'ALexa': "alexa@gmail.com",
            name: name,
            email: email,
            date : formattedDate
        }
    });
};

export {
    stuControllers,
    getAllstudents,
    createUser,
};

