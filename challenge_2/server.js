const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const helper = require('./client/helper.js');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, 'samples/');
  },
  filename: function(req, file, callback) {
    callback(null, file.fieldname);
  }
});

const upload = multer({ storage });

app.get('/', (req, res) => {
  res.status(200);
  res.sendFile(__dirname + '/index.html');
});

app.get('/download', (req, res) => {
  res.download(__dirname + '/samples/csv_report.csv');
});

app.post('/upload_json', upload.single('jsonFile'), (req, res, next) => {
  var file = req.file;
  if (!file) {
    var error = new Error().status(400);
    return next(error);
  } else {
    res.send(file);
  }

  fs.readFile(__dirname + '/samples/sales_report.json', (err, data) => {
    if (err) {
      throw err;
    } else {
      fs.writeFile(__dirname + '/samples/csv_report.csv', helper.convertToCSV(JSON.parse(data)), (err)=> {
        if (err) {
          throw err;
        } else {
          console.log('CSV saved successfully');
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

