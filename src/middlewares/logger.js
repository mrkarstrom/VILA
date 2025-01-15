import colors from 'colors';

const logger = (req, res, next) => {
  const methodColors = {
    GET: 'green',
    POST: 'yellow',
    PUT: 'green',
    DELETE: 'red',
  };

  const color = methodColors[req.method] || 'white';

  console.log(
    `${req.method} `[color] +
      `${req.protocol}://${req.get('host')}${req.originalUrl}`
  );

  next();
};

export default logger;
