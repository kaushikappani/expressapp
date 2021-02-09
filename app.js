const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('express server started')
});

app.listen(3000, () => {
    console.log('Server started')
})
