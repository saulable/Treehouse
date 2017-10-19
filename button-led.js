var five = require('johnny-five');

var board = new five.Board();
board.on('ready', function(){
	var button = new five.Button('A0');
	var led = new five.Led(13);

	button.on('press', function(){
		console.log('button pressed!');
		led.on();
	});
	button.on('release', function(){
		console.log('button released!');
		led.off();
	});


})