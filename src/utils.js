import nconf from 'nconf';
import winston from 'winston';

const context = nconf.argv().env().file('./conf/config.json');

nconf.defaults({
  'NODE_ENV': 'development'
});

// Get profile config
const config = context.get(context.get('NODE_ENV')) || {};

// Create logger
let level = 'info';
if (config.logger && config.logger.level) {
  level = config.logger.level;
}
const logger = new(winston.Logger)({
  transports: [
    new(winston.transports.Console)()
  ],
  level: level
});

const debug = logger.debug;
const info = logger.info;
const error = logger.error;

export {
  context,
  config,
  logger,
  debug,
  info,
  error
}