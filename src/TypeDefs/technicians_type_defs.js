    const { gql } = require('apollo-server');

const technicianTypeDefs = gql `

   
    input TechnicianInput{
        names: String!
        lastnames: String!
        address: String!
        telephone: String!
        email: String!
        experience: String!
        covered_serv: String!
        covered_localities: [String]!
        covered_modules: [String]!
        covered_categories: [String]! 
       }


    input SelectTechnician{
        
        localidad: String
        categoria: String
        servicio: String


    }

    type Technician{

        id: Int!
        names: String!
        lastnames: String!
        address: String!
        telephone: String!
        email: String!
        experience: String!
        covered_serv: String!
        covered_localities: [String]!
        covered_modules: [String]!
        covered_categories: [String]!

}
    type Query{
      
        DetailTechnician(tec:SelectTechnician):[Technician]!


    }

   type Mutation{
         
        CreateTec(tec:TechnicianInput):String


   }


`;


module.exports = technicianTypeDefs;
