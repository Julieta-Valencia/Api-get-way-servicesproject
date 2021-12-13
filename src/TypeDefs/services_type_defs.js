const { gql } = require('apollo-server');
const services_TypeDefs = gql  `
   
input ServiceInput{

            names: String!
            lastnames: String!
            locality:  String!
            address: String!
            telephone: String!
            email: String!      
            tech_id: Int!
            module: String!
            dom_service: String!
            category: String!
            description: String!
            app_date: String!


}

type Service{
            message: String!
            service_id: Int!
}


type Mutation {

   createService(Ser:ServiceInput!):Service!



}

`;


module.exports=services_TypeDefs;



