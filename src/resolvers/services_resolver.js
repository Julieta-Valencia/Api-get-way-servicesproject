const services_resolver= {
    Query: {},
     
     Mutation: {
      
createService: async(_, { Ser }, { dataSources}) => {
 return await dataSources.serviceAPI.createService(Ser);



 }   
 }

};
module.exports =services_resolver;
