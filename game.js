b = new Bump(PIXI);	
var gameport = document.getElementById("gameport");
var renderer = PIXI.autoDetectRenderer(400, 400, {backgroundColor: 0x000033});
gameport.appendChild(renderer.view);
var main = new PIXI.Container();
var credits_stage = new PIXI.Container();
var game_stage = new PIXI.Container();
var credits = new PIXI.Container();
var win = "Winner!"
const line = new PIXI.Graphics();
const line2 = new PIXI.Graphics();
const line3 = new PIXI.Graphics();
const line4 = new PIXI.Graphics();
const line5 = new PIXI.Graphics();
const line6 = new PIXI.Graphics();
const line7 = new PIXI.Graphics();
const line8 = new PIXI.Graphics();
const line9 = new PIXI.Graphics();
const line10 = new PIXI.Graphics();
const line11 = new PIXI.Graphics();
const line12 = new PIXI.Graphics();
const line13 = new PIXI.Graphics();
const line14 = new PIXI.Graphics();
const line15 = new PIXI.Graphics();
const line16 = new PIXI.Graphics();
const line17 = new PIXI.Graphics();
const line18 = new PIXI.Graphics();
const line19 = new PIXI.Graphics();
const line20 = new PIXI.Graphics();
const line21 = new PIXI.Graphics();
const line22 = new PIXI.Graphics();
const line23 = new PIXI.Graphics();
const line24 = new PIXI.Graphics();
const line25 = new PIXI.Graphics();
const line26 = new PIXI.Graphics();
const line27 = new PIXI.Graphics();
const line28 = new PIXI.Graphics();
const line29 = new PIXI.Graphics();
var winner;


let text = new PIXI.Text('Maze Runner by am4388',{fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});
let title = new PIXI.Text('MAZE RUNNER',{fontFamily:'Arial', fontSize:36, fill : 0xff1010, align : 'center'});
text.x = 50;
text.y = 150;
title.x = 100;
title.y = 50;
var finish =  new PIXI.Sprite(PIXI.Texture.fromImage("finish.png"));
finish.x = 240;
finish.y = 300;
finish.scale.x = 4;
finish.scale.y = 5;

const walking_frames = ["walk3.png","walk1.png","walk2.png"];
PIXI.loader
	.add(walking_frames)
	.load(setup)
	.load(ready)
	
function ready()
{
	winner = PIXI.audioManager.getAudio("winner.mp3");
}

function setup()
{
	var frames = [] ;
	for (var i = 1; i<=3; i++)
	{
		frames.push(PIXI.Texture.fromFrame('walk'+i+'.png'));
	}
	runner = new PIXI.extras.MovieClip(frames);
	runner.scale.x = 1.5;
	runner.scale.y = 1.5;
	runner.x = 25;
	runner.y = 30;
	runner.animationSpeed = 0.05;
	runner.play();
	
	
}
function keydownEventHandler(e) {

  if (e.keyCode == 87) 
	{ // W key
		var new_pos_y = runner.position.y - 5;
		createjs.Tween.get(runner.position).to ({y:new_pos_y},100)
	}

  if (e.keyCode == 83) { // S key
    var new_pos_y = runner.position.y + 5;
	createjs.Tween.get(runner.position).to ({y:new_pos_y},100)
	}

  if (e.keyCode == 65) { // A key
    var new_pos_x = runner.position.x - 5;
	createjs.Tween.get(runner.position).to ({x:new_pos_x},100)
	}

  if (e.keyCode == 68) { // D key
    var new_pos_x = runner.position.x + 5;
	createjs.Tween.get(runner.position).to ({x:new_pos_x},100)
	}
}
document.addEventListener('keydown', keydownEventHandler);

var walls = [line,line2,line3,line4,line5,line6,line7,line8,line9,line10,line11,line12,line13,line14,line14,line15,line16,line17,line18,line19,line20,line21,line22,line23,line24,line25,line26,line27,line28,line29];

var play_button = new PIXI.Sprite(PIXI.Texture.fromImage("Play.png"));
play_button.anchor.set(0.5);
play_button.scale.x = 3;
play_button.scale.y = 3;
play_button.interactive = true; 
play_button.buttonMode = true;
play_button.on('click',start);
play_button.x = 200;
play_button.y = 150;

var credits_button = new PIXI.Sprite(PIXI.Texture.fromImage("Credits.png"));
credits_button.anchor.set(0.5);
credits_button.interactive = true; 
credits_button.buttonMode = true;
credits_button.scale.x = 3;
credits_button.scale.y = 3;
credits_button.on('click',Credits);
credits_button.x = 200;
credits_button.y = 200;

var arrow_button = new PIXI.Sprite(PIXI.Texture.fromImage("arrow.png"));
arrow_button.anchor.set(0.5);
arrow_button.interactive = true; 
arrow_button.buttonMode = true;
arrow_button.scale.x = 2;
arrow_button.scale.y = 2;
arrow_button.on('click',play);
arrow_button.x = 30;
arrow_button.y = 10;

function draw(){
//const line = new PIXI.Graphics();
line.lineStyle(4, 0xFFFFFF, 1);
line.moveTo(0, 0);
line.lineTo(0, 400);
line.x = 32;
line.y = 32;
//main.addChild(line);

//const line2 = new PIXI.Graphics();
line2.lineStyle(4, 0xFFFFFF, 1);
line2.moveTo(0, 0);
line2.lineTo(400, 0);
line2.x = 32;
line2.y = 32;
//main.addChild(line2);

//const line3 = new PIXI.Graphics();
line3.lineStyle(4, 0xFFFFFF, 1);
line3.moveTo(350, 0);
line3.lineTo(350, 400);
line3.x = 32;
line3.y = 32;
//main.addChild(line3);

//const line4 = new PIXI.Graphics();
line4.lineStyle(4, 0xFFFFFF, 1);
line4.moveTo(0, 350);
line4.lineTo(350,350 );
line4.x = 32;
line4.y = 32;
//main.addChild(line4);

//Inside Maze Walls
//const line5 = new PIXI.Graphics();
line5.lineStyle(4, 0xFFFFFF, 1);
line5.moveTo(50, 0);
line5.lineTo(50, 50);
line5.x = 32;
line5.y = 32;
//main.addChild(line5);

//const line6 = new PIXI.Graphics();
line6.lineStyle(4, 0xFFFFFF, 1);
line6.moveTo(50, 50);
line6.lineTo(100, 50);
line6.x = 32;
line6.y = 32;
//main.addChild(line6);


//const line7 = new PIXI.Graphics();
line7.lineStyle(4, 0xFFFFFF, 1);
line7.moveTo(100, 50);
line7.lineTo(100, 20);
line7.x = 32;
line7.y = 32;
//main.addChild(line7);


//const line8 = new PIXI.Graphics();
line8.lineStyle(4, 0xFFFFFF, 1);
line8.moveTo(50, 100);
line8.lineTo(300, 100);
line8.x = 32;
line8.y = 32;
//main.addChild(line8);


//const line9 = new PIXI.Graphics();
line9.lineStyle(4, 0xFFFFFF, 1);
line9.moveTo(200, 100);
line9.lineTo(200, 200);
line9.x = 32;
line9.y = 32;
//main.addChild(line9);

//const line10 = new PIXI.Graphics();
line10.lineStyle(4, 0xFFFFFF, 1);
line10.moveTo(0, 200);
line10.lineTo(150, 200);
line10.x = 32;
line10.y = 32;
//main.addChild(line10);

//const line11 = new PIXI.Graphics();
line11.lineStyle(4, 0xFFFFFF, 1);
line11.moveTo(150, 200);
line11.lineTo(150, 150);
line11.x = 32;
line11.y = 32;
//main.addChild(line11);

//const line12 = new PIXI.Graphics();
line12.lineStyle(4, 0xFFFFFF, 1);
line12.moveTo(50, 100);
line12.lineTo(50, 150);
line12.x = 32;
line12.y = 32;
//main.addChild(line12);

//const line13 = new PIXI.Graphics();
line13.lineStyle(4, 0xFFFFFF, 1);
line13.moveTo(100, 100);
line13.lineTo(100, 150);
line13.x = 32;
line13.y = 32;
//main.addChild(line13);

//const line14 = new PIXI.Graphics();
line14.lineStyle(4, 0xFFFFFF, 1);
line14.moveTo(100, 300);
line14.lineTo(100, 250);
line14.x = 32;
line14.y = 32;
//main.addChild(line14);

//const line15 = new PIXI.Graphics();
line15.lineStyle(4, 0xFFFFFF, 1);
line15.moveTo(0, 300);
line15.lineTo(50, 300);
line15.x = 32;
line15.y = 32;
//main.addChild(line15);

//const line16 = new PIXI.Graphics();
line16.lineStyle(4, 0xFFFFFF, 1);
line16.moveTo(100, 250);
line16.lineTo(300, 250);
line16.x = 32;
line16.y = 32;
//main.addChild(line16);

//const line17 = new PIXI.Graphics();
line17.lineStyle(4, 0xFFFFFF, 1);
line17.moveTo(250, 250);
line17.lineTo(250, 150);
line17.x = 32;
line17.y = 32;
//main.addChild(line17);

//const line18 = new PIXI.Graphics();
line18.lineStyle(4, 0xFFFFFF, 1);
line18.moveTo(50, 300);
line18.lineTo(50, 250);
line18.x = 32;
line18.y = 32;
//main.addChild(line18);

//const line19 = new PIXI.Graphics();
line19.lineStyle(4, 0xFFFFFF, 1);
line19.moveTo(350, 200);
line19.lineTo(300, 200);
line19.x = 32;
line19.y = 32;
//main.addChild(line19);

//const line20 = new PIXI.Graphics();
line20.lineStyle(4, 0xFFFFFF, 1);
line20.moveTo(200, 100);
line20.lineTo(200, 50);
line20.x = 32;
line20.y = 32;
//main.addChild(line20);

//const line21 = new PIXI.Graphics();
line21.lineStyle(4, 0xFFFFFF, 1);
line21.moveTo(150, 0);
line21.lineTo(150, 50);
line21.x = 32;
line21.y = 32;
//main.addChild(line21);

//const line22 = new PIXI.Graphics();
line22.lineStyle(4, 0xFFFFFF, 1);
line22.moveTo(300, 0);
line22.lineTo(300, 50);
line22.x = 32;
line22.y = 32;
//main.addChild(line22);

//const line23 = new PIXI.Graphics();
line23.lineStyle(4, 0xFFFFFF, 1);
line23.moveTo(250, 0);
line23.lineTo(250, 50);
line23.x = 32;
line23.y = 32;
//main.addChild(line23);

//const line24 = new PIXI.Graphics();
line24.lineStyle(4, 0xFFFFFF, 1);
line24.moveTo(300, 350);
line24.lineTo(300, 300);
line24.x = 32;
line24.y = 32;
//main.addChild(line24);

//const line25 = new PIXI.Graphics();
line25.lineStyle(4, 0xFFFFFF, 1);
line25.moveTo(300, 300);
line25.lineTo(100, 300);
line25.x = 32;
line25.y = 32;
//main.addChild(line25);

//const line26 = new PIXI.Graphics();
line26.lineStyle(4, 0xFFFFFF, 1);
line26.moveTo(300, 100);
line26.lineTo(300, 150);
line26.x = 32;
line26.y = 32;
//main.addChild(line26);

//const line27 = new PIXI.Graphics();
line27.lineStyle(4, 0xFFFFFF, 1);
line27.moveTo(50, 100);
line27.lineTo(50, 150);
line27.x = 32;
line27.y = 32;
//main.addChild(line27);

//const line28 = new PIXI.Graphics();
line28.lineStyle(4, 0xFFFFFF, 1);
line28.moveTo(50, 100);
line28.lineTo(50, 150);
line28.x = 32;
line28.y = 32;
//main.addChild(line28);

//const line29 = new PIXI.Graphics();
line29.lineStyle(4, 0xFFFFFF, 1);
line29.moveTo(150, 150);
line29.lineTo(150, 100);
line29.x = 32;
line29.y = 32;
//main.addChild(line29);
}

function play()
{
	for (var i = main.children.length - 1; i >= 0; i--) {	main.removeChild(main.children[i]);};
	main.addChild(title);
	main.addChild(play_button);
	main.addChild(credits_button);
}
function start()

{
	runner.x = 25;
	runner.y = 30;
	main.addChild(arrow_button);
	main.removeChild(title);
	main.addChild(finish);
	main.addChild(runner);
	main.removeChild(play_button);
	main.removeChild(credits_button);
	for(let i=0;i<walls.length;i++)
	{
		main.addChild(walls[i]);
	}
	draw();
	GameLoop();
	
	
}

function Credits()
{
	runner.x = 25;
	runner.y = 30;
	for (var i = main.children.length - 1; i >= 0; i--) {	main.removeChild(main.children[i]);};
	main.addChild(text);
	main.addChild(arrow_button);

}

function win()
{
	credits();
}   

function GameLoop()
{
	requestAnimationFrame(GameLoop);
	for (let i = 0 ; i<walls.length;i++)
	{
		b.hit(runner,walls[i],true);
	}
	
	if (b.hit(runner,finish))
	{
		winner.play();
		Credits();
	}
	
}
function animate() 
{	
  requestAnimationFrame(animate);
  renderer.render(main);	
}

play();
animate();