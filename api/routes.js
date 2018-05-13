module.exports = (app) => {
  var controller = require('./controller');

  app.post('/isPrime', controller.isPrime);
  app.post('/sum', controller.sum);
}
