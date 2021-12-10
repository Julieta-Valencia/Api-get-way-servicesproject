//Se llama al typedef (esquema) de cada submodulo
const services_TypeDefs = require('./services_type_defs');
const techniciansTypeDefs = require('./technicians_type_defs');
const cotTypeDefs = require('./cotizacion_type_defs');
//Se unen
const schemasArrays = [services_TypeDefs, techniciansTypeDefs, cotTypeDefs];
//Se exportan
module.exports = schemasArrays;