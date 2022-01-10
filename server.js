// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get('/api/:mydate', (req, res)=> {
  let date = req.params.mydate
  if (Number(date)) {
    let my_date = new Date(Number(date)).toUTCString()
    res.json({'unix': Number(date), 'utc': my_date})
  }else {
    res.json({'unix': new Date(date).getTime(), 'utc': new Date(date).toUTCString()})
  };
})

// listen for requests :)
var listener = app.listen(5000, function () {
  let ok = listener.address()
  console.log('server is listening on 5000');
});

// let ok = new Date('2022-10-15').getTime()
// console.log(ok)



// let final = 1665792000000/1000
// let ok2 = new Date(final).toUTCString()

// console.log(ok2)

let date_changer = (date)=> {
  let first = new Date(date).toUTCString()

}
