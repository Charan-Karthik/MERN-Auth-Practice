const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

// require config (database connection)
require('./config/mongoose.config');

app.use(cors({credentials: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// require routes
require('./routes/user.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );