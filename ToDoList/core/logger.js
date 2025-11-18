class Logger {
  constructor() {}

  log(logLevel = ['INFO', 'WARNING', 'ERROR'], message) {
    const dateInUtc = new Date().toISOString();
    console.log(dateInUtc, `[${logLevel}]:`, message);
    return { dateInUtc, logLevel, message };
  }
}
const logger = new Logger();
module.exports = logger.log;
