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
      handler: dataController.getSingleData
    }   
  ]
  
module.exports = routes
  