
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'registerform.html');
});

app.post('/register', (req, res) => {
    const { name, email, phone, dob, address } = req.body;
    // Here you can save the registration data to a database or perform any necessary processing
    console.log('Registration Data:', { name, email, phone, dob, address });
    res.send('Done');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
