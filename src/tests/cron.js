const cron = {
  jobs: [
    {
      jobId: 'e909e5c5-c0a7-4d91-a60a-5dbfe17fcdad',
      spec:
      {
        time: '0/5 * * * *',
        timezone: 'America/Sao_Paulo',
        name: 'Keep alive',
        description: 'This job sends a keep alive notification to a device every 5 minutes',
        broker: {
          subject: 'dojot.device-manager.device',
          message: {
            event: 'configure',
            data: {
              attrs: { message: 'keepalive' },
              id: '9bbd77'
            },
            meta: {
              service: 'admin'
            }
          }
        }
      }
    }
  ]
};


module.exports = cron;
