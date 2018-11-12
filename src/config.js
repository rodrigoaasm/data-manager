const config = {
  flow_broker_url: process.env.FLOW_BROKER_URL || 'http://flowbroker:80', // export FLOW_BROKER_URL=http://172.30.0.2:80
  device_manager_url: process.env.DEVICE_MANAGER_URL || 'http://device-manager:5000', // export FLOW_BROKER_URL=http://172.30.0.2:80
};

export default config;
