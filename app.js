const 
  app = require('express')(),
  nunjucks = require('nunjucks'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  env = nunjucks.configure('views', { noCache: true }),
  models = require('./models'),
  makeRouter = require('./routes');
  
 
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

const port = process.env.PORT || 3000;

app.use(makeRouter);

app.listen(port, function(){
  console.log(`listening on port ${port}`);

  models.db.sync({ force: true })
  .then(()=> console.log('everything is a ok'))
  .catch(console.error);
});