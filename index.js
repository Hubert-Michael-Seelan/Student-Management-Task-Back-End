const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb+srv://hubertmichaelseelan:7LG8GuS5B4ze05VU@cluster0.44dmf2y.mongodb.net/student");
mongoose.connection
.once("open",() => console.log("DB Connected"))
.on("error",(error)=>{
  console.log(`ERROR : ${error}`);
})

// Routes
const studentsRouter = require('./Routes/Students');
app.use('/students', studentsRouter);

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
});

app.get("/",(req, res)=>{
  res.send("Express App is Running")
})
