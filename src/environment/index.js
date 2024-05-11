// For local setup
const local = {
    host: 'http://localhost:2035',
    basePath: '/api/v1'
  };
  
  // For dev server
  const dev = {
    host: 'http://localhost:2035',
    basePath: '/api/v1'
  };
  
  // For staging server
  const staging = {
    host: 'http://54.215.36.15:3002',
    basePath: '/api/v1'
  };
  
  // For production server
  const production = {
    host: 'http://54.241.177.200:3002',
    basePath: '/api/v1'
  };
  
  console.log('process.env.REACT_APP_ENV :', process.env.REACT_APP_ENV);
  
  if (process.env.REACT_APP_ENV === 'local') module.exports = local;
  else if (process.env.REACT_APP_ENV === 'dev') module.exports = dev;
  else if (process.env.REACT_APP_ENV === 'staging') module.exports = staging;
  else if (process.env.REACT_APP_ENV === 'production') module.exports = production;
  else module.exports = dev;
  