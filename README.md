# MERN Stack Portfolio

A full-stack portfolio application built with MongoDB, Express.js, React, and Node.js.

## Project Structure

```
mprofile/
├── client/          # React frontend
├── server/          # Node.js backend
├── .env.example     # Environment variables template
└── package.json     # Root package.json with scripts
```

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/piyush8i8/MyPortpolio.git
cd MyPortpolio
```

### 2. Install dependencies
```bash
npm run install-all
```

### 3. Environment Setup
1. Copy `.env.example` to `.env`
2. Fill in your actual environment variables:
   - Email configuration for contact form
   - Sendinblue API credentials
   - Server port (default: 8080)

### 4. Development
```bash
# Run both client and server concurrently
npm run dev

# Run server only
npm run server

# Run client only
npm run client
```

### 5. Production Build
```bash
# Build client for production
npm run build

# Start production server
npm start
```

## Live Demo

- **Frontend**: Deploy the client folder to any static hosting (Vercel, Netlify, etc.)
- **Backend**: https://my-portpolio-e9eq.vercel.app/
- **GitHub**: https://github.com/piyush8i8/MyPortpolio

## Features

- Responsive portfolio design
- Contact form with email functionality (connected to live backend)
- Modern React with hooks and context
- Express.js REST API deployed on Vercel
- Email integration with Sendinblue
- Bootstrap & Tailwind CSS styling
- Smooth animations with Framer Motion

## Tech Stack

**Frontend:**
- React 18
- Bootstrap 5
- Tailwind CSS
- Framer Motion
- React Icons
- Typewriter Effect

**Backend:**
- Node.js
- Express.js
- Nodemailer
- CORS
- Dotenv

## License

ISC
