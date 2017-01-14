var router = require('express').Router();
var tesseract = require('node-tesseract');
var fs = require('fs');
var multer = require('multer');
var path = require('path');
var upload = multer({ dest: path.resolve('./temp/') })


router.post('/upload', upload.single('photo'), function(req, res) {
	var tempPath = req.file.path;

	tesseract.process(tempPath, {l: 'eng'},function(err, text) {
	    if(err) {
	    	fs.unlink(tempPath, function(err) {
	    		res.status(500).json({ error: 'Unable to process uploaded file' });
	    	});
	    } else {
	    	fs.unlink(tempPath, function(err) {
	    		if (err) {
	    			res.status(500);
	    		} else {
	    			res.status(200).json({ text: text });
	    		}
	    	});
	    }
	});
});

module.exports = router;