const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class serviceAPI extends RESTDataSource {
constructor() {
super();
this.baseURL = serverConfig.service_api_url;
 }
async createService(service) {
service = new Object(JSON.parse(JSON.stringify(service)));
return await this.post('/createUser/',service);
 }
}
module.exports = serviceAPI;

