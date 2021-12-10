const cotizacion_resolver= {
    Query: {
    searchCoti: async(_, { concept }, { dataSources}) => {
    return await dataSources.cotizacionAPI.receiveCotizacion(concept)
 
     },
     },
     Mutation: {
      
        CreateCoti: async(_, { cot }, { dataSources}) => {
        return await dataSources.cotizacionAPI.createCotizacion(cot);



 }   
 }

};
module.exports =cotizacion_resolver;
