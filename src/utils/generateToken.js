const generateToken = () => {
  return ("Bearer " + new Buffer('dummy jwt schema').toString('base64')) +
    '.' + (new Buffer(JSON.stringify({ 'service': 'admin', 'username': 'admin' })).toString('base64')) +
    '.' + (new Buffer('dummy signature').toString('base64'));
};

export default generateToken;
