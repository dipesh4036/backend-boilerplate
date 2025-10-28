# 🚀 Backend Boilerplate

A production-ready backend boilerplate built with Express.js and ES modules. Designed for developers who want to start building scalable APIs quickly with industry best practices baked in.

## ✨ Features

- **🎯 Production-Ready**: Built with industry best practices and security in mind
- **⚡ ES Modules**: Modern JavaScript with ES6+ syntax
- **🔒 Security First**: Helmet for security headers, CORS configuration, and rate limiting
- **📝 Structured Logging**: Winston logger with multiple transports and log levels
- **🎨 Clean Architecture**: Modular structure for scalable API development
- **🔧 Environment Config**: Easy configuration management with dotenv
- **📦 Zero Setup**: Clone and start building immediately

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/dipesh4036/backend-boilerplate.git
cd backend-boilerplate
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env
```

Edit `.env` with your configuration:

```env
NODE_ENV=development
PORT=3000
API_VERSION=v1

# Add your environment variables here
```

### 4. Start Development Server

```bash
npm run dev
# or
yarn dev
```

Your API will be available at `http://localhost:3000`

## 📁 Project Structure

```
backend-boilerplate/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── config.js           # Configuration settings
│   │   ├── controllers/
│   │   │   └── health.controller.js # Route controllers
│   │   ├── middlewares/
│   │   │   ├── rateLimiter.js      # Rate limiting middleware
│   │   │   └── logger.js           # Winston logger middleware
│   │   ├── routes/
│   │   │   └── health.js           # API routes
│   │   ├── services/
│   │   │   └── health.service.js   # Business logic layer
│   │   ├── utils/
│   │   │   ├── asyncHandler.js     # Async error wrapper
│   │   │   ├── ApiResponse.js      # Standard API response
│   │   │   └── ApiError.js         # Custom error class
│   │   └── server.js               # Express app setup
│   ├── .env                        # Environment variables
│   ├── .env.example                # Environment template
│   └── package.json
```


## 🔐 Security Features

### Built-in Security Middleware

- **Helmet**: Sets various HTTP headers for security
- **CORS**: Configured Cross-Origin Resource Sharing
- **Rate Limiting**: Prevents abuse with configurable rate limits
- 
### Best Practices

- Environment variables for sensitive data
- Secure headers configuration
- Request size limits
- HTTP parameter pollution protection

## 📝 API Documentation

### Base URL

```
http://localhost:3000/api/
```

### Health Check

```http
GET /health
```

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2025-10-28T10:30:00.000Z",
  "uptime": 123.456
}
```

### Error Response Format

All errors follow this structure:

```json
{
  "success": false,
  "message": "Error message",
  "statusCode": 400,
  "stack": "Error stack trace (development only)"
}
```

## 📊 Logging

The boilerplate uses Winston for structured logging with multiple transports:

- **Console**: Development-friendly colored output
- **File**: Separate files for errors and combined logs
- **Log Rotation**: Automatic log rotation based on size

```javascript
import logger from './config/logger.js';

logger.info('Info message');
logger.error('Error message', { error: err });
logger.warn('Warning message');
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

## ⭐ Show Your Support

If this project helped you, please give it a ⭐️!
