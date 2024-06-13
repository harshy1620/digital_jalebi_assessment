const express = require("express");
const cors = require("cors");
const port=4000

const app = express();
app.use(express.json());
app.use(cors());

const db = require("./config/db");

app.use("/user", require("./routes/UserRoutes"));
// app.use("/survey", require("./routes/SurveyRoutes"));
app.get("/",(req,res)=>{
    res.send("hello world")
})

app.listen(port, () =>{
    console.log(`Server running on ${port}`);
})
