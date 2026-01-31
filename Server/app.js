const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hey there. Peach Gardenia Team is working actively on this project. Stay tuned for updates!');
});
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});