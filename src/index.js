const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const cotizacionAPI = require('./dataSources/cotizacion_api');
const serviceAPI = require('./dataSources/services_api');
const technicianAPI = require('./dataSources/technicians_api');
const server = new ApolloServer({
typeDefs,
resolvers,
dataSources: () => ({
cotizacionAPI: new cotizacionAPI(),
serviceAPI: new serviceAPI(),
technicianAPI: new technicianAPI(),
 }),
introspection: true,
playground: true
});
server.listen(process.env.PORT || 4000).then(({ url }) => {
console.log(`🚀 Server ready at ${url}`);
});