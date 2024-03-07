export const environment = {
  production: false,
  geoApiKey: process.env['GEO_API_KEY'],
  VERSION: require('../../package.json').version,
};
