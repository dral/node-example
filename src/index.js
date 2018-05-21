import express from 'express';

const app = express();

app.engine('pug', require('pug').__express);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/david', function (req, res) {
  res.render('test.pug', req.query);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
