const { gql } = require('apollo-server');
const cotTypeDefs = gql `



input CotizacionInput{
        
    localidad:String
    Categoria:String
    Servicio:String

}

Type Cotizacion {
       
        concept: String!
        price: Int!
        }

type Mutation{
         
  CreateCoti(cot:CotizacionInput):Cotizacion!
    
    
       }


type Query{

  searchCoti(concept:String):Cotizacion!    

}
       `;
module.export = cotTypeDefs;