const express = require('express');
const app = express();
const cors = require('cors');

const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(routes);
//app.setTimeout(50000);
app.listen(5555, () => console.log(`servidor ok `));
