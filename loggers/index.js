const FileLogger    = require('./FileLogger');
const ConsoleLogger = require('./ConsoleLogger');

module.exports = function createLogger(configuration) {
    switch(configuration.using) {
        case "file": 
            return new FileLogger(configuration.adapters.file.path);
        case "console":
            return new ConsoleLogger();
        default:
            return new ConsoleLogger();
    }
}
