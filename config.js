module.exports = {
    log: {

        // Supporteds: file, console
        using: process.env.LOG_ADAPTER,

        adapters: {
            file: {
                path: "logs/system.log"
            },

            console: {

            }
        }
    }
}