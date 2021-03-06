//***  GLOBAL VARIABLES

//position and speed
var positionX = 30;
var positionY = 30;
var charSpeedX = 0;
var charSpeedY = 0;

// player current direction
var keyPressUp = false;
var keyPressDown = false;
var keyPressRight = false;
var keyPressLeft = false;

// player score
var score = 0;

// timer
var timerCountdown = 120;

//Wall Array
var xPosition = ['0','0','680','0','40','40','640','80','80','100','90','120','140','260','260','160','180','480','500','540','600','600','600','560','560','300','200','300','440','400','360','360','560','560','460','460'];
var yPosition = ['0','0','0','480','80','40','40','440','40','320','360','340','80','100','120','140','400','360','360','400','360','80','80','340','120','140','160','360','340','380','340','160','160','260','210','320'];
var width = ['20','700','20','700','20','620','20','540','20','40','40','20','140','20','-100','20','300','20','120','40','20','20','-380','20','-260','20','80','160','20','20','20','80','-80','-80','80','80'];
var height = ['500','20','500','20','380','20','420','20','300','20','60','-260','20','40','20','280','20','60','20', '20', '-200','60','20','-220','20','240','220','20','-180','-170','-180','20','20','20','20','20'];

//Food Array
var xFood = ['100', '200', '300', '400', '500','600'] ;
var yFood = ['30','30','30','30','30','30'];

// sounds
var ping = new Audio("sounds/ping.wav");
var pong = new Audio("sounds/pong.wav");
var bust = new Audio("sounds/bust.wav");

// image
var PolarBear = new Image();
PolarBear.src = "images/PolarBear.png";

var Fish = new Image();
Fish.src = "images/Fish.png";

/*
 * Customize the look of the canvas app
 */
function init() {
	// CUSTOMIZE YOUR APP
	setTitle("Polar Maze"); // set title
	setByLine("By : Reem and Aleena"); // set name

	setCanvasSize(700,500); // canvas height and width in pixels

	setButton1("Start"); // ("" if not using)
	setButton2("Help"); // ("" if not using)

	setTimer(50); 
	// END OF CUSTOMIZATIONS	

	setInterval(function() {
		timerCountdown = timerCountdown - 1;

		if (timerCountdown == 0) {
			timerCountdown = 120;
			positionX = 30;
			positionY = 30;
		}
	}, 1000);
}

//*****************************
//KEYBOARD INPUT SECTION
//*****************************
function keyDown(code, char) {
		//debugOut("key press, code="+code+" char="+char);

	if (code == 38) {
		keyPressUp = true;
	} else if (code == 40) {
		keyPressDown = true;
	} else if (code == 37) {
		keyPressLeft = true;
	} else if (code == 39) {
		keyPressRight = true;
	}
}

function keyUp(code, char) {
	//debugOut("key up, code="+code+" char="+char);

	if (code == 38)
		keyPressUp = false;
	else if (code == 40)
		keyPressDown = false;
	else if (code == 39)
		keyPressRight = false;
	else if (code == 37)
		keyPressLeft = false;
}


//*****************************
//MOUSE INPUT SECTION -- UNUSED
//*****************************
function mouseDown(x, y, button) {}
function mouseUp(x, y, button) {}
function mouseMove(x, y) {}
function mouseOver(x, y) {}
function mouseOut(x, y) {}

//*****************************
//BUTTON INPUT SECTION
//*****************************
function button1Click(button) {
	//debugOut("button 1 click, button="+button);
	charSpeedX = -7;
	charSpeedY = 7;
	setButton1("");
}
function button2Click(button) {
	//debugOut("button 2 click, button="+button);
	alert("Player 1: A and Z keys\nPlayer 2: arrow keys");
}

//****************************
//TIMER SECTION
//****************************

/*
 * Main game method. Moves, checks collisions, and draws screen
 */
 
function clockTickEvent() {
	if (keyPressUp == true) {
		positionY = positionY - 2;
	}
	if (keyPressDown == true) {
		positionY = positionY + 2;
	}
	if (keyPressRight == true) {
		positionX = positionX + 2;
	}
	if (keyPressLeft == true) {
		positionX = positionX - 2;
	}
	
	// draw screen
	canvas.fillStyle = "white";
	canvas.fillRect(0,0,700,500);

	canvas.fillStyle = "lightcyan";
	for (var i = 0; i < xPosition.length; i++) {
		canvas.fillRect (xPosition [i] , yPosition [i] , width[i] , height[i]);

		var wallObject = {x:xPosition[i], y:yPosition[i], h:height[i], w:width[i]};
		var ballObject = {x:positionX, y:positionY, h: 0.1, w: 0.1};

		if (isCollide(wallObject, ballObject)) 
		//if (positionY == yPosition[i] + 20 || positionX == xPosition[i] + 20){
			if (keyPressUp == true) {
				positionY = positionY + 2;
			}
			if (keyPressDown == true) {
				positionY = positionY - 2;
			}
			if (keyPressRight == true) {
				positionX = positionX - 2;
			}
			if (keyPressLeft == true) {
				positionX = positionX + 2;
			}
			
			console.log("COLLIDED AT " + xPosition[i] + " " + yPosition[i] + " " + width[i] + " " + height[i])
		}
	}

	canvas.fillStyle = "orange";
	for (var j = 0; j < xFood.length; j++) {
		canvas.fillArc (xFood[j], yFood[j], 4,0,360);
	}

	//canvas.fillStyle = "orange";
	//canvas.fillArc (30,50,4,0,360);
	

	canvas.fillStyle="purple";
	canvas.fillArc(positionX, positionY, 5, 0, 360);
	//canvas.drawImage(PolarBear, positionX, positionY) ;
	
	canvas.font = "50px monospace bold";
	canvas.fillStyle = "black";
	canvas.fillText("Timer: " + timerCountdown,20, 15);
}
	
function isCollide(a, b) {
    return (a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.h + a.y > b.y);
}