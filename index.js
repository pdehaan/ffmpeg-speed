const exec = require('child_process').exec,
	  fs = require('fs');


function ChangeSpeed(options, cb) {
	var input = options.input,
		speed = options.speed,
		output = options.output,
		unlink = options.unlink,
		config = {};


	if(speed !== 'x0.5' && speed !== 'x2') {
		return cb('Wrong speed value: ' + speed);
	}

	if(!fs.existsSync(input)) {
		return cb('Input source does not exist: ' + input);
	}

	if(fs.existsSync(output)) {
		return cb('Output source exists: ' + output);
	}

	if(speed === 'x0.5') {
		config.video = 2;
		config.audio = 0.5;
	} else {
		config.video = 0.5;
		config.audio = 2;
	}

	exec('ffmpeg -i "' + input + '" -vf "setpts=' + config.video + '*PTS" -filter:a "atempo=' + config.audio + '" "' + output + '" -y', (err, stdout, stderr) => {
	  if (err) {
	    return cb(err);
	  }

	  if (unlink) {
	  	fs.unlinkSync(input);
	  }

	  cb(null, stdout || 'Success!');
	});
}

module.exports = ChangeSpeed;