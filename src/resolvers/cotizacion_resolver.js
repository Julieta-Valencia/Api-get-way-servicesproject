const cotizacion_resolver= {
    Query: {
    searchCoti: async(_, { concept }, { dataSources}) => {
    return await dataSources.cotizacionAPI.receiveCotizacion(concept)
 
     },
     },
     Mutation: {
      
        CreateService: async(_, { ser }, { dataSources}) => {
        return await dataSources.cotizacionAPI.createCotizacion(ser);
    },
       
 }
    

};
module.exports =cotizacion_resolver;
