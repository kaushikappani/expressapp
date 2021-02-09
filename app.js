const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('express server started')
});

app.listen(port, () => {
    console.log('Server started')
})