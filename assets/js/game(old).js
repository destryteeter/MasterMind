var canvasElement = document.getElementById("canvas");
var canvas = canvasElement.getContext("2d");

var canvas_width = canvasElement.width;
var canvas_height = canvasElement.height;
var botX = 2;
var botY = 2;
var mx = 2;
var my = 4;
var points = 0;

var init = {};
var FPS = {};

FPS.set = 30;

var blankBoard = {
	color: "#bbb",
	x: 2,
	y: 2,
	width: 500,
	height: 700,
	draw: function() {
		canvas.fillStyle = this.color;
		canvas.fillRect(this.x, this.y, this.width, this.height);
	}
};


var emptyPegs = {
	color: "#fff",
	r: 25,
	draw: function() {
		for (var i=50; i<=275; i+=75) {
			for (var j=50; j<=575; j+=75) {
				canvas.beginPath();
				canvas.arc(i, j, this.r, 0, Math.PI*2, true);
				canvas.fillStyle = this.color;
        		canvas.fill();
        	}
    	}
	}
}

var emptyMarkers = {
	color: "#fff",
	r: 7,
	draw: function() {
		for (var i=325; i<=344; i+=19) {
			for (var j = 40; j<= 59; j+=19) {
				for (var k = 0; k<=575; k+=75) {
					canvas.beginPath();
					canvas.arc(i, j+k, this.r, 0, Math.PI*2, true);
					canvas.fillStyle = this.color;
					canvas.fill();
				}
			}
		}
	}
}

var coloredPegs = {
	colors: [
		"#000000",
		"#FFFFFF",
		"#FF0000",
		"#0000FF",
		"#008800",
		"#FFFF00"],
	r: 25,
	draw: function () {
		j = 50;
		i = 0;
		while (j <= 425 && i < 6) {
			canvas.beginPath();
			canvas.arc(400, j, this.r, 0, Math.PI*2, true);
			canvas.fillStyle = this.colors[i];
			canvas.fill();
			j += 75;
			i += 1;
		}
	}
}


var chooseColor1 = {
	colorNames: [
	"black",
	"white",
	"red",
	"blue",
	"green",
	"yellow"],
	colorCodes: {
		"black": "#000000",
		"white": "#FFFFFF",
		"red": "#FF0000",
		"blue": "#0000FF",
		"green": "#008800",
		"yellow": "FFFF00"
	},
	r: 25,
	draw: function(color) {
        for (i=0;i<6;i++) {
            if (this.colorNames[i] === color) {
				canvas.beginPath();
				canvas.arc(50, 50, 25, 0, Math.PI*2, true);
				canvas.fillStyle = this.colorCodes[color];
				canvas.fill();
            }
        }
    }
};

init.interval = setInterval(function() {
	update();
	draw();
}, 1000/FPS.set);

function update() {
	blankBoard.x = blankBoard.x.clamp(0, canvas_width - blankBoard.width);
}

function draw() {
	canvas.clearRect(0,0, canvas_width, canvas_height);
/*	blankBoard.draw();
	emptyPegs.draw();
	emptyMarkers.draw();
	coloredPegs.draw();*/
	chooseColor1.draw("white");
}

