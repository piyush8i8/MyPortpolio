const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require('path')

//dotenv configuartion
dotenv.config();

//rest object
const app = express();

//midlewares
// Enhanced CORS configuration
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      "https://my-portfolio-1ipr.vercel.app",
      "https://my-portfoilo-e9eq.vercel.app",
      "https://my-portpolio-e9eq.vercel.app",
      "http://localhost:3000",
      "http://localhost:3001",
      "https://localhost:3000",
      "https://localhost:3001"
    ];
    
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    
    // Allow Vercel preview deployments
    if (origin.includes('vercel.app')) {
      return callback(null, true);
    }
    
    return callback(new Error('Not allowed by CORS'), false);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD', 'PATCH'],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'X-Requested-With',
    'Accept',
    'Origin',
    'Access-Control-Request-Method',
    'Access-Control-Request-Headers'
  ],
  exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar'],
  maxAge: 86400, // 24 hours
  preflightContinue: false,
  optionsSuccessStatus: 200
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Error handling middleware for CORS
app.use((err, req, res, next) => {
  if (err.message === 'Not allowed by CORS') {
    return res.status(403).json({
      success: false,
      message: 'CORS policy violation: Origin not allowed',
      error: 'Forbidden'
    });
  }
  next(err);
});

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
