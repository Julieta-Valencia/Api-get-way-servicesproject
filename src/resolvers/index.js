const cotizacion_resolver = require('./cotizacion_resolver');
const services_resolver = require('./services_resolver');
const technicians_resolver = require('./technicians_resolver');
const lodash = require('lodash');
const resolvers = lodash.merge(cotizacion_resolver, services_resolver, technicians_resolver);
module.exports = resolvers;
