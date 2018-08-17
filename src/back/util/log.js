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

