import winston from "winston";

export type LogLevel = "error" | "warn" | "info" | "debug";

interface LogParams {
  level: LogLevel;
  message: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meta?: any;
}

// Define log level priorities
const logLevels = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3,
};

// Create Winston logger instance
const winstonLogger = winston.createLogger({
  levels: logLevels,
  level: process.env.LOG_LEVEL || "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
  transports: [new winston.transports.Console()],
});

/**
 * Logger function that writes logs in JSON format
 * @param params Log parameters including level, message, and optional metadata
 */
export const logger = (params: LogParams): void => {
  const { level, message, meta } = params;

  winstonLogger.log({
    level,
    message,
    timestamp: new Date().toISOString(),
    meta,
  });
};
