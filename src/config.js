const config = {
  flow_broker_url: process.env.FLOW_BROKER_URL || 'http://flowbroker:80', // export FLOW_BROKER_URL=http://192.168.32.2:80
  device_manager_url: process.env.DEVICE_MANAGER_URL || 'http://device-manager:5000', // export DEVICE_MANAGER_URL=http://192.168.16.5:5000
  port: process.env.PORT || 3000,
};

export default config;
