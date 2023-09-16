const express = require('express'); // Import Express.js
const cors = require('cors'); // Import the cors middleware

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Use the cors middleware

app.get('/local', (req, res) => { // Change (res, req) to (req, res)
    res.json('This Is A Backend Development');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
