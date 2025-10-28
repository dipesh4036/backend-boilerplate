import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import config from './config/config.js';
import { logger, morganMiddleware } from './middlewares/logger.js';
import { limiter } from './middlewares/rateLimiter.js';
import healthRoute from './routes/health.route.js';

const app = express();

// Security
app.use(helmet());

// CORS
app.use(
  cors({
    origin: config.allowedOrigins,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Body parsers
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Compression
app.use(compression());

// Logging
app.use(morganMiddleware);

// Rate limiting
app.use('/api', limiter);

app.get('/', (req, res) => {
  res.send('Welcome to the Demo Backend API');
});

// Health check ||  API routes
app.use('/', healthRoute);


// Start server
const server = app.listen(config.port, () => {
  logger.info(`Server running in ${config.env} mode on port ${config.port}`);
});

// Handle unhandled rejections
process.on('unhandledRejection', (err) => {
  logger.error(`Unhandled Rejection: ${err.message}`);
  server.close(() => process.exit(1));
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  logger.error(`Uncaught Exception: ${err.message}`);
  process.exit(1);
});