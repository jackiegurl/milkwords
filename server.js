var express = require('express');
var port = 8000;
app = express();


app.use('/', express.static(__dirname));
app.listen(port);