# ffmpeg-speed

## Speed up/slow down effect for ffmpeg.

### Options
* input - full input directory to vieo file.
* speed - 'x0.5' or 'x2'
* output - full output directory to new vieo file.
* unlink - boolean : delete input file after finishing.


Working example.
```
const ffmpegSpeed = require('ffmpeg-speed'),
	  path = require('path');

var config = {
	input: path.join(__dirname, 'input.mp4'),
	speed: 'x0.5',
	output: path.join(__dirname, 'output.mp4'),
	unlink: true
};


var cb = function(err, done) {
	if(err) {
		throw err;
	}

	console.log(done);
};



ffmpegSpeed(config, cb);
```