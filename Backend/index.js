const express = require('express');
const cors = require('cors');

const routes = require('./src/routes/router');

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3000, () => {
    console.log("Respondendo na porta 4000");
});
