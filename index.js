const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('www'));

app.get('/', (req, res) => {
    res.send('Yes, it works!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));