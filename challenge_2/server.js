const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/client'));

app.get('/', (req, res) => {
  res.send();
});

app.post('/', (req, res) => {
  res.send();
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

