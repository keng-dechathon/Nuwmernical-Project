const dataController = require('../controller/dataController')

const routes = [
    {
      method: 'GET',
      url: '/api/data',
      handler: dataController.getData
    },
    {
      method: 'GET',
      url: '/api/data/:id',
      handler: dataController.getSingleData,
      schema: {
        params: {
          type: "object",
          properties: {
            id: {
              type: "string",
              description: "Name of Method",
            },
          },
        },
        response: {
          200: {
            description: "Successful Response",
            type: "object",
            properties: {
              id: { type: "string" },
              xl: { type: "number" },
              xr: { type: "number" },
              fx: { type: "string" },
              x: { type: "number" },
              arrayA: { type: "array" },
              arrayB: { type: "array" },
              Xarr: { type: "array" },
              Yarr: { type: "array" },
              X: { type: "number" },
              Y: { type: "number" },
            },
          },
        },
      },
    }   
  ]
  
module.exports = routes
  