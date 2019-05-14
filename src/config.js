const config = {
  flow_broker_url: process.env.FLOW_BROKER_URL || 'http://flowbroker:80',
  device_manager_url: process.env.DEVICE_MANAGER_URL || 'http://device-manager:5000',
  cron_url: process.env.CRON_URL || 'http://cron:5000/cron',
  port: process.env.PORT || 3000,
};

export default config;
