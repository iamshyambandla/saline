var express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname+ '/'));
app.use(express.json())

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/index.html');
});
app.post('/saline',function(req,res){
    console.log({"ok":req.body});
    io.emit(req.body.id,req.body.yo);
    res.send("ok");
});
const server=app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
const io = require('socket.io')(server);

