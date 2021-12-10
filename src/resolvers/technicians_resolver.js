const technicians_resolver= {
    Query: {
        DetailTechnician: async(_, { tec }, { dataSources}) => {
    return await dataSources.technicianAPI.receiveTechnician(tec)
 
     },
     },
     Mutation: {
      
        CreateTec: async(_, { tec }, { dataSources}) => {
        return await dataSources.technicianAPI.createTechnician(tec);



 }   
 }

};
module.exports =technicians_resolver;
