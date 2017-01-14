var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var webroute = require('./routes/web');
var ocrroute = require('./routes/ocr');

var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

// add middleware
app.use('/assets', express.static(__dirname + '/public'));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb',
								extended: true }));

// mount routes
app.use('/', webroute);
app.use('/api', ocrroute);

// start app
app.listen(port, server_ip_address);