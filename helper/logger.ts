import winston from 'winston';

const consoleFormat = winston.format.printf(({ level, message }) => {
  const loglevel = winston.format
    .colorize()
    .colorize(level, `${level.toUpperCase()}`);
  return `${loglevel}: ${message}`;
});

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      // @ts-ignore
      level: browser.config.winstonLogLevel,
      handleExceptions: true,
      format: winston.format.combine(winston.format.timestamp(), consoleFormat),
    }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

export default logger;
