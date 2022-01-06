const express = require('express')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', jsonParser, function(req,res){
  console.log("\n \n Post request received");
  console.log(JSON.stringify(req.body));
  res.send(req.body);
})

app.listen(port, () => {
  console.log(`Example app listening at https://post-request-listener:${port}`)
})