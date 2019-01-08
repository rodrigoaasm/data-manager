let tokenRequest = '';

const retToken = () => tokenRequest;

const authParse = (req, res, next) => {
  const rawToken = req.get('authorization');
  tokenRequest = rawToken;
  return next();
};

export default { authParse, retToken };
