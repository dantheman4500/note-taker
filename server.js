//* imports 
const express = require("express");
const apiRoutes = require("./Routes/apiRoutes");
const indexRoutes = require("./Routes/IndexRoutes");


// *  Initialize the app and port
const app = express();
const PORT = process.env.PORT || 3001;

//* Static routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

//* routes middleware
app.use('/api', apiRoutes);
app.use('/', indexRoutes);

//* Sever start  msg
app.listen(PORT, () => console.log(`Listening on PORT:  Localhost:${PORT}`));
