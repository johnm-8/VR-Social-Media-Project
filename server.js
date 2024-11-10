const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

// Predefined email and password
const validEmail = 'johndoe@email.com';
const validPassword = 'johndoe123';

app.use(bodyParser.json());

// Serve static files from the root directory
app.use(express.static(__dirname));

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email === validEmail && password === validPassword) {
        res.status(200).json({ success: true });
    } else {
        res.status(401).json({ success: false });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});