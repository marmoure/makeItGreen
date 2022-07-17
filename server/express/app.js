const express = require("express");
const path = require("path");
const app = express();

const visitorRoutes = require("./routes/visitor.route")
const userRoutes = require("./routes/user.route")
const adminRoutes = require("./routes/admin.route")

//api Routes
// all routes should return JSON to be rendered by React
app.use("/", visitorRoutes)
app.use("/user", userRoutes)
app.use("/admin", adminRoutes)

//default path
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

module.exports = app;