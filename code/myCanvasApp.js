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

	setTimer(20); 
	// END OF CUSTOMIZATIONS	
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
 
function clockTickEvent(){
	
	if (keyPressUp == true)
	{
		positionY = positionY - 2;
		
		/*if (positionY == 20 || positionY == 60 && positionX >= 40 && positionX <= 660 || positionY == 100 && positionX >= 120 && positionX <= 620 || positionY == 140 && positionX >= 160 && positionX <= 280 || positionY == 140 && positionX >= 300 && positionX<= 580 || positionY == 140 && positionX >= 600 && positionX <= 620 || positionY == 180 && positionX >= 360 && positionX <= 460 || positionY == 180 && positionX >= 480 && positionX <= 580 || positionY == 230 && positionX >= 460 && positionX <= 540  || positionY == 280 && positionX >= 480 && positionX <= 560 || positionY == 340 && positionX >= 80 && positionX <= 140 || positionY == 340 && positionX >= 360 && positionX <= 380 || positionY == 340 && positionX >= 440 && positionX <= 540 || positionY == 340 && positionX >= 560 && positionX <= 580 || positionY == 380 && positionX >= 200 && positionX <= 280 || positionY == 380 && positionX >= 300 && positionX <= 460 || positionY == 380 && positionX >= 480 && positionX <= 620 || positionY == 420 && positionX >= 90 && positionX <= 130 || positionY == 420 && positionX >= 160 && positionX <= 500 || positionY == 420 && positionX >= 540 && positionX <= 580 || positionY == 460 && positionX >= 40 && positionX <= 60 || positionY == 460 && positionX >= 80 && positionX <= 620 || positionY == 460 && positionX >= 640 && positionX <= 660)
		{
			positionY = positionY + 2;
		} */
	}

	if (keyPressDown == true)
	{
		positionY = positionY + 2;
		
		/*if (positionY == 40 && positionX >=40 && positionX <= 660 || positionY == 80 && positionX >= 40 && positionX <= 60 || positionY == 80 && positionX >= 120 && positionX <= 620 || positionY == 120 && positionX >= 160 && positionX <= 280 || positionY == 120 && positionX >= 300 && positionX <= 580 || positionY == 160 && positionX >= 200 && positionX <= 280 || positionY == 160 && positionX >= 360 && positionX <= 460 || positionY == 160 && positionX >= 380 && positionX <= 460 || positionY == 160 && positionX >= 480 && positionX <= 560 || positionY == 160 && positionX >= 600 && positionX <= 620 || positionY == 210 && positionX >= 400 && positionX <= 420 ||positionY == 210 && positionX >= 440 && positionX <= 540 || positionY == 260 && positionX >= 480 && positionX <= 560 || positionY == 320 && positionX >= 100 && positionX <= 140 || positionY == 320 && positionX >=440 && positionX <=540 || positionY == 360 && positionX >= 90 && positionX <=130 || positionY == 360 && positionX >= 300 && positionX <= 460 || positionY == 360 && positionX >= 480 && positionX <= 620 || positionY == 400 && positionX >= 160 && positionX <= 500 || positionY == 400 && positionX >= 540 && positionX <= 580 || positionY == 440 && positionX >= 80 && positionX <= 620 || positionY == 480) 
		{
			positionY = positionY - 2;
		}*/
	}
	if (keyPressRight == true)
	{
		positionX = positionX + 2;
		
		/*if (positionX == 40 && positionY >= 40 && positionY <= 60 || positionX == 40 && positionY >= 80 && positionY <= 460 || positionX == 80 && positionY >= 40 && positionY <= 340 || positionX == 80 && positionY >= 440 && positionY <= 460 || positionX == 90 && positionY >= 360 && positionY <= 420 || positionX == 120 && positionY >= 80 && positionY <= 340 || positionX == 160 && positionY >= 120 && positionY <= 420 || positionX == 200 && positionY >= 160 && positionY <= 380 || positionX == 260 && positionY >= 100 && positionY <= 120 || positionX == 300 && positionY >= 120 && positionY <= 380 || positionX == 360 && positionY >= 160 && positionY <=  340 || positionX == 400 && positionY >= 210 && positionY <=  360 || positionX == 440 && positionY >= 160 && positionY <= 340 || positionX == 480 && positionY >= 160 && positionY <= 180 || positionX == 480 && positionY >= 260 && positionY <= 280 || positionX == 480 && positionY >= 360 && positionY <= 400 || positionX == 540 && positionY >= 400 && positionY <= 420 || positionX == 560 && positionY >= 120 && positionY <= 340 || positionX == 600 && positionY >= 80 && positionY <= 140 || positionX == 600 && positionY >= 160 && positionY <= 380 ||positionX == 640 && positionY >= 40 && positionY <= 460 ||positionX == 680)
		{
			positionX = positionX - 2;
		}*/
	}
	if (keyPressLeft == true)
	{
		positionX = positionX - 2;
		
		/*if (positionX == 20 || positionX == 60 && positionY >= 80 && positionY <= 460 || positionX == 100 && positionY >= 60 && positionY <= 340 || positionX == 130 && positionY >= 360 && positionY <= 420 || positionX == 140 && positionY >= 80 && positionY <= 340 || positionX == 180 && positionY >= 120 && positionY <= 420 || positionX == 280 && positionY >= 100 && positionY <= 140 || positionX == 280 && positionY >= 160 && positionY <= 380 || positionX == 320 && positionY >= 120 && positionY <= 380 || positionX == 380 && positionY >= 160 && positionY <= 340 || positionX == 420 && positionY >= 210 && positionY <= 380 || positionX == 460 && positionY >= 160 && positionY <= 340 || positionX == 460 && positionY >= 360 && positionY <= 380 || positionX == 500 && positionY >= 360 && positionY <= 420 || positionX == 540 && positionY >= 320 && positionY <= 340 || positionX == 540 && positionY >= 210 && positionY <= 230 || positionX == 580 && positionY >= 120 && positionY <= 340 || positionX == 580 && positionY >= 400 && positionY <= 420 || positionX == 620 && positionY >= 80 && positionY <= 140 || positionX == 620 && positionY >= 160 && positionY <= 380 || positionX == 620 && positionY >= 440 && positionY <= 460 || positionX == 660 && positionY >= 40 && positionY <= 460)
		{
			positionX = positionX + 2;
		}*/
	}
	
	
	// draw screen
	canvas.fillStyle = "white";
	canvas.fillRect(0,0,700,500);
	
	
	/*canvas.fillStyle = "lightcyan";
	//using blueprints to lable the maze
	//Primary Walls (First Rectangle)
	canvas.fillRect (0,0,20,500); //left wall
	canvas.fillRect (0,0,700,20); //top wall
	canvas.fillRect (680,0,20,500); //right wall
	canvas.fillRect (0,480,700,20); //bottom wall
	//Secondary Walls (Second Rectangle)
	canvas.fillRect (40,80,20,380); //left wall
	canvas.fillRect (40,40,620,20); //top wall
	canvas.fillRect (640,40,20,420);  //right wall
	canvas.fillRect (80,440,540,20); //bottom wall
	//The Maze
	canvas.fillRect(80,40,20,300); //first wall in (up to down) from the right
	canvas.fillRect(100,320,40,20); //from first wall to third wall (connector)
	canvas.fillRect(90,360,40,60); //The rectangle (bottom left)
	canvas.fillRect(120,340,20,-260); //the third wall
	canvas.fillRect(140,80,140,20); //the fourth wall
	canvas.fillRect(260,100,20,40); //The second connector wall to create a dead end
	canvas.fillRect(260,120,-100,20); //The Fifth Wall
	canvas.fillRect(160,140,20,280); //The Third Connector
	canvas.fillRect(180,400,300,20); //The Sixth Wall
	canvas.fillRect(480,360,20,60); //The third connector
	canvas.fillRect(500,360,120,20); //The Seventh Wall
	canvas.fillRect(540,400,40,20); //The Rectangle in the Bottom Right
	canvas.fillRect(600,360,20,-200); //The Eigth Wall
	canvas.fillRect(600,80,20,60); //The Ninth Wall
	canvas.fillRect(600,80,-380,20); //The Tenth Wall
	canvas.fillRect(560,340,20,-220); //The Eleventh Wall
	canvas.fillRect(560,120,-260,20); //The Twelfth Wall
	canvas.fillRect(300,140,20,240); //The Thirteenth Wall
	canvas.fillRect(200,160,80,220); //The Rectangle in almost the middle / left of the screen
	canvas.fillRect(300,360,160,20); //The Fourteenth Wall
	canvas.fillRect(440,340,20,-180); //The Fifteenth Wall
	canvas.fillRect(400,380,20,-170); //The Sixteenth Wall
	canvas.fillRect(360,340,20,-180); //The Seventeenth Wall
	canvas.fillRect(360,160,80,20); //The Eighteenth Wall
	canvas.fillRect(560,160,-80,20); //The Nineteenth Wall
	canvas.fillRect(560,260,-80,20); //The Twentieth Wall
	canvas.fillRect(460,210,80,20); //The Twenty - first Wall
	canvas.fillRect(460,320,80,20); //The Twenty - Second Wall  */
	
	var xPosition = ['0','0','680','0','40','40','640','80','80','100','90','120','140','260','260','160','180','480',
	'500','540','600','600','600','560','560','300','200','300','440','400','360','360','560','560','460','460'];
	var yPosition = ['0','0','0','480','80','40','40','440','40','320','360','340','80','100','120','140','400','360',
	'360','400','360','80','80','340','120','140','160','360','340','380','340','160','160','260','210','320'];
	var width = ['20','700','20','700','20','620','20','540','20','40','40','20','140','20','-100','20','300','20',
	'120','40','20','20','-380','20','-260','20','80','160','20','20','20','80','-80','-80','80','80'];
	var height = ['500','20','500','20','380','20','420','20','300','20','60','-260','20','40','20','280','20','60',
	'20','-200','60','20','-220','20','240','220','20','-180','-170','-180','20','20','20','20','20'];
	
	canvas.fillStyle = "lightcyan";

	for (var i = 0; i < xPosition.length; i++) {
		canvas.fillRect (xPosition [i] , yPosition [i] , width[i] , height[i]);
		/*if (xPosition [i], yPosition [i] , xPosition + width [i] , yPosition + height [i])
		{
			if (keyPressUp == true)
				positionY = positionY + 2;
			if (keyPressDown == true)
				positionY = positionY - 2;
			if (keyPressRight == true)
				positionX = positionX -2;
			if (keyPressLeft == true)
				positionX = positionX + 2;
		}*/
	}
	 
	//canvas.fillStyle = "orange";
	//canvas.fillArc (30,50,4,0,360);
	

	canvas.fillStyle="purple";
	canvas.fillArc(positionX, positionY, 5, 0, 360);
	//canvas.drawImage(PolarBear, positionX, positionY) ;
	
	
	/*canvas.drawImage(ice,player1x,player1y);
	canvas.drawImage(ice,player2x,player2y);
	canvas.fillStyle="green";
	canvas.fillArc(ballX, ballY, 5, 0, 360);
	canvas.font = "24px monospace bold";
	canvas.fillStyle = "white";
	canvas.fillText(p1Score,20, 30);
	canvas.fillText(p2Score,660,30);*/
	
}

//updates every 20 milli seconds.