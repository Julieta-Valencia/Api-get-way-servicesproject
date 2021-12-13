const { gql } = require('apollo-server');
const cotTypeDefs = gql `



input CotizacionInput{
        
    localidad: String!
    Categoria: String!
    Servicio: String!

}

input service{
        
 
  concept: String!
  price: Int!

}

type Cotizacion {
        
        id: String!
        concept: String!
        price: Int!
        }

type Mutation{
         
    CreateService(ser: service!):Cotizacion!
            
   }        



type Query{

  searchCoti(concept:String):Cotizacion!    

}
 `;
module.exports = cotTypeDefs;