module.exports = {
    log: {

        // Supporteds: file, console
        using: process.env.LOG_ADAPTER,

        adapters: {
            file: {
                path: "logs/system.log"
            },

            console: {

            },

            slack: {
                slackWebHook: 'https://hooks.slack.com/services/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'
            }
        }
    },
    knex: {
        client     : 'mysql',
        connection : {
        host       : 'localhost',
        user       : 'nodeApp',
        password   : 'nodeApp',
        database   : 'training',
        charset    : 'utf8'
      }
    }
}
