const config = require('../../config/config');

exports.httpHeader = (req, res, next) => {
  const allowedOrigins = config.ALLOWEDORIGINS;
  const { origin } = req.headers;

  console.log('origin', origin);
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PATCH');

  // Request headers you wish to allow
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type,Authorization,Accept'
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
};
