let fs = require('fs');
let path = require('path');

fs.readFile(path.join(__dirname, 'testdata.json'), 'utf8', (err, data) => {
	console.log(data);
})