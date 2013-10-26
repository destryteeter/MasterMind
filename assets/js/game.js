var can, ctx;

        function init() {
            can = document.getElementById("can");
            ctx = can.getContext("2d");
        	drawLines();
        	drawRect();
			}
		function drawLines() {
		    ctx.strokeStyle = "black";
		    ctx.beginPath();
		    ctx.moveTo(0, can.height / 2);
		    ctx.lineTo(can.width, can.height / 2);
		    ctx.moveTo(can.width / 2, 0);
		    ctx.lineTo(can.width / 2, can.height);
		    ctx.stroke();
		}	