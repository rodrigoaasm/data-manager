const config = {
  dojot_url: process.env.DOJOT_URL || 'localhost:8000',
  flow_broker_url: process.env.FLOW_BROKER_URL || 'http://flowbroker:80', // export FLOW_BROKER_URL=http://172.30.0.3:80
  device_manager_url: process.env.DEVICE_MANAGER_URL || 'http://device-manager:5000', // export DEVICE_MANAGER_URL=http://172.29.0.24:5000
};

export default config;
