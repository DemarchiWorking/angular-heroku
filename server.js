const express = require('express');
const path = require('path');
const app = express();
	
    const PORT = process.env.PORT || 3000;
    

    app.use(express.static(__dirname + '/dist/innclude'));
	app.get('/*',(req, res) => {
		res.sendFile(__dirname +'/src/innclude/index.html');
    });
	app.listen(PORT, () => {
	console.log('servidor iniciado na porta ' + PORT);
    })

	
	