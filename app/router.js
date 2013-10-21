module.exports = function(app){
  var ctrlPath = process.cwd() + '/app/controllers',
      indexController = require(ctrlPath + '/application_controller');

  app.get('/', indexController.index);

}
