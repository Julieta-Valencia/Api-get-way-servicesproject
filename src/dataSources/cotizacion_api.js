const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class cotizacionAPI extends RESTDataSource {
constructor() {
super();
this.baseURL = serverConfig.cotizacion_api_url;
 }
async createCotizacion(cotizacion) {
cotizacion = new Object(JSON.parse(JSON.stringify(cotizacion)));
return await this.post('/price/',cotizacion);
 }

async receiveCotizacion(concept) {
return await this.get(`/price/${concept}`);
         }
    
}

module.exports = cotizacionAPI;