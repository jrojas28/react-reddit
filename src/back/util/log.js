/**
 * @file Logger creation util.
 */
import { createLogger, format, transports } from 'winston';

const {
  combine,
  timestamp,
  label,
  printf,
} = format;

const customFormat = printf((info) => {
  return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
});

/**
 * Returns a logger to be used on the back-end.
 * @param {String} name Name of the logger
 */
const getLogger = (name) => {
  const logger = createLogger({
    format: combine(
      label({ label: name }),
      timestamp(),
      customFormat
    ),
    transports: [new transports.Console()],
  });

  return logger;
};

export default getLogger;

