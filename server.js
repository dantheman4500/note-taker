//* imports 
const express = require("express");
const apiRoutes = require("./Routes/apiRoutes");
const htmlRoutes = require("./Routes/htmlRoutes");

// * Port and expess
const app = express();
const PORT = process.env.PORT || 3001;

//* Static routes

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

//* routes middleware
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//* Sever start  msg
app.listen
    (PORT, () => console.log(`Listening on PORT:  Localhost:${PORT}`));
