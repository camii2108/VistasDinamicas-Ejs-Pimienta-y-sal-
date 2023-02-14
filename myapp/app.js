let createError = require('http-errors'); /* permite gestionar los eroroes de http */
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser'); /* para trabajar con cokies */
let logger = require('morgan');/* cosas que apsaron en la aplicacion e historial */

let indexRouter = require('./routes/index');


let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));/* middelware: lofue a nivel de desarrol*/
app.use(express.json());/* recibe datos del formulario desde le json */
app.use(express.urlencoded({ extended: false }));/*permite trabajar con los datos que viejan en formulario por http */
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));/* para archivos estaticos */
 
app.use('/', indexRouter);


// catch 404 and forward to error handler
/* es un middelware que permite controlar los errores 404 de las pagina atraves de tercer argumento de la funcion callback.Es decir se crea un error y devuelve esra respuesta*/
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
