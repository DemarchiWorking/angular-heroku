const express = require('express');
const path = require('path');
const app = express();
	
	const PORT = process.env.PORT;
    app.use(express.static(__dirname + '/src'));
	app.get('/*',(req, res) => {
		res.sendFile(__dirname +'/src/index.html');
    });
	app.listen(PORT, () => {
	console.log('servidor iniciado na porta ' + PORT);
    })

	
	