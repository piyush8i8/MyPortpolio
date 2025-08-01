const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require('path')

//dotenv configuartion
dotenv.config();

//rest object
const app = express();

//midlewares
app.use(cors({
  origin: [
    "https://my-portfolio-1ipr.vercel.app",
    "https://my-portpolio-e9eq.vercel.app",
    "http://localhost:3000",
    "http://localhost:3001"
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());


//static files
app.use(express.static(path.join(__dirname,'../client/build')))


//routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));
app.get('*', function(req,res){
  res.sendFile(path.join(__dirname,'../client/build/index.html'))
});


//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`Server Runnning On PORT ${PORT} `);
});
