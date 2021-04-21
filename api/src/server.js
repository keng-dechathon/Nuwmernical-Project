const fastify = require('fastify')({ logger: true })
const swagger = require('./config/swagger')
const routes = require('./route')


// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)


fastify.register(require("fastify-cors"), {
  origin: '*',  
  method: 'GET'
});


routes.forEach((route, index) => {
  fastify.route(route)
})

const option = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          name: { type: 'string' }
        }
      }
    }
  }
}

fastify.get('/',option, async (request, reply) => {
  return { hello: 'world' }
})


// Run the server!
const start = async () => {
  try {
    await fastify.listen(4000, '0.0.0.0')
    fastify.swagger()
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()