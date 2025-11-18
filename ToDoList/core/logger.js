class Logger {
  constructor() {}

  log(logLevel = ['INFO', 'WARNING', 'ERROR'], message, request) {
    const dateInUtc = new Date().toISOString();
    console.log(dateInUtc, `[${logLevel}]:`, message);
    return { dateInUtc, logLevel, message, request };
  }
}
const logger = new Logger();
module.exports = logger.log;
