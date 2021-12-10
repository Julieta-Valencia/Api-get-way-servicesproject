const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class technicianAPI extends RESTDataSource {
constructor() {
super();
this.baseURL = serverConfig.service_api_url;
 }
async createTechnician(technician) {
technician = new Object(JSON.parse(JSON.stringify(technician)));
return await this.post('/technicians/',technician);
 }

async receiveTechnician(select) {
request = new Object(JSON.parse(JSON.stringify(select)));   
return await this.get(`/technicians/`,request);
     }


}
module.exports = technicianAPI;