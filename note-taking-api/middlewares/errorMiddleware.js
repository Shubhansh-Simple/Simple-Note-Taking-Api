/*
 * Override default error handler
 * which returns HTML page
 */

const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};


const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message    = err.message;

  // Checking mongoose bad object ID
  if ( err.name === 'CastError' && err.kind === 'ObjectId' ){
    message    = 'Resource Not Found';
    statusCode = 404;
  }

  res.status( statusCode )
  res.json({
    message,
    StackTrace : process.env.NODE_ENV === 'production' ? null : err.stack
  })
};


export {notFound, errorHandler};

