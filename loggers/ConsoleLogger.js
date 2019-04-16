class ConsoleLogger {

    log(message) {
        console.log(`${new Date().toISOString()}`, message)
    }
}

module.exports = ConsoleLogger;
