const express = require('express');

const app = express();

require('./routes/zoo.routes.js')(app);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});