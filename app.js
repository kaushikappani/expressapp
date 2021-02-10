const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('express server started')
});

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`server started in port ${port}`)
})
