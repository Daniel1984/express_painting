var express = require('express'),
    http = require('http'),
    path = require('path'),
    app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('less-middleware')({
  dest: path.join(__dirname, 'public/stylesheets'),
  src: path.join(__dirname, 'app/assets/less'),
  prefix: '/stylesheets',
  compress: true
}));
app.use(express.static(path.join(__dirname, 'public')));

require(path.join(__dirname, 'app/router'))(app);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  app.use(express.static(path.join(__dirname, 'app/assets')));
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
