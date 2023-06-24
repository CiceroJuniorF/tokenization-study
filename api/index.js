const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);
const port = 3000;
const helmet = require('helmet');

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	next();
});

app.post('*', (req, res) => {
    console.log("[!] Request")
    console.log(JSON.stringify(req.body))
	res.status(200);
    res.json({requestBody: req.body}) 
	res.end();
});

server.listen(port, (err) => {
	if (err) {
		throw err;
	}

	console.log(`Started at ${port}`);
});

module.exports = server;