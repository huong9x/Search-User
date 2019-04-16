const FileLogger    = require('./FileLogger');
const ConsoleLogger = require('./ConsoleLogger');
const NullLogger    = require('./NullLogger');
const SlackLogger   = require('./SlackLogger');

module.exports = function createLogger(configuration) {
    switch(configuration.using) {
        case "file": 
            return new FileLogger(configuration.adapters.file.path);
        case "slack": 
            return new SlackLogger(configuration.adapters.slack.slackWebHook)
        case "console":
            return new ConsoleLogger();
        default:
            return new NullLogger();
    }
}
