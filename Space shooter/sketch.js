var path,girl;
var pw1,pw2,pw3,pw4,pw5,pw6,pw7,pw8;
var pathImg

var clap;
var clown;
var dance;
var eyeroll;
var float;
var hello;
var hug;
var jump;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;
var gameOver, restart;

var pennyWise;

function preload(){

  runningRight = loadAnimation("MC/MC_00.png", "MC/MC_01.png", "MC/MC_02.png", 
  "MC/MC_03.png", "MC/MC_04.png", "MC/MC_05.png", "MC/MC_06.png", "MC/MC_07.png", 
  "MC/MC_08.png", "MC/MC_09.png", "MC/MC_10.png", "MC/MC_11.png", "MC/MC_12.png", 
  "MC/MC_13.png", "MC/MC_14.png", "MC/MC_15.png", "MC/MC_16.png");

  runningLeft = loadAnimation("MC2/MC2_00.png", "MC2/MC2_01.png", "MC2/MC2_02.png", 
  "MC2/MC2_03.png", "MC2/MC2_04.png", "MC2/MC2_05.png", "MC2/MC2_06.png", "MC2/MC2_07.png", 
  "MC2/MC2_08.png", "MC2/MC2_09.png", "MC2/MC2_10.png", "MC2/MC2_11.png", "MC2/MC2_12.png", 
  "MC2/MC2_13.png", "MC2/MC2_14.png", "MC2/MC2_15.png", "MC2/MC2_16.png")
}

function setup(){
  
createCanvas(800,800);
MCharacter = createSprite(400, 600, 15, 30);
MCharacter.addAnimation("runningR", runningRight);
MCharacter.addAnimation("runningL", runningLeft);
MCharacter.scale = 0.75
}

function draw() {
  background(0);
  
  drawSprites();

  if (keyIsDown(RIGHT_ARROW)){
    MCharacter.x += 3;
    MCharacter.changeAnimation("runningR");
  }
  
  if (keyIsDown(LEFT_ARROW)){
    MCharacter.x -= 3;
    MCharacter.changeAnimation("runningL");
  }

  if (keyIsDown(UP_ARROW)){
    MCharacter.y -= 3;
  }

  if (keyIsDown(DOWN_ARROW)){
    MCharacter.y += 3;
  }
  }

    

    

function clap1(){
        pw1 =createSprite(1100,Math.round(random(50, 250)));
        pw1.scale =0.5;
        pw1.velocityX = -(6 + 2*distance/150);
        pw1.addAnimation("PWClap",clap);
        pw1.setLifetime=170;
        pennyWise.add(pw1);
}

function clown2(){
        pw2 =createSprite(1100,Math.round(random(50, 250)));
        pw2.scale =0.5;
        pw2.velocityX = -(6 + 2*distance/150);
        pw2.addAnimation("PWClown",clown);
        pw2.setLifetime=170;
        pennyWise.add(pw2);
}

function dance3(){
        pw3 =createSprite(1100,Math.round(random(50, 250)));
        pw3.scale =0.5;
        pw3.velocityX = -(6 + 2*distance/150);
        pw3.addAnimation("PWDance",dance);
        pw3.setLifetime=170;
        pennyWise.add(pw3);
}

function eyeroll4(){
        pw4 =createSprite(1100,Math.round(random(50, 250)));
        pw4.scale =0.5;
        pw4.velocityX = -(6 + 2*distance/150);
        pw4.addAnimation("PWEyeroll",eyeroll);
        pw4.setLifetime=170;
        pennyWise.add(pw4);
}

function float5(){
        pw5 =createSprite(1100,Math.round(random(50, 250)));
        pw5.scale =0.5;
        pw5.velocityX = -(6 + 2*distance/150);
        pw5.addAnimation("PWFloat",float);
        pw5.setLifetime=170;
        pennyWise.add(pw5);
}

function hello6(){
        pw6 =createSprite(1100,Math.round(random(50, 250)));
        pw6.scale =0.5;
        pw6.velocityX = -(6 + 2*distance/150);
        pw6.setLifetime=170;
        pennyWise.add(pw6);
}

function hug7(){
        pw7 =createSprite(1100,Math.round(random(50, 250)));
        pw7.scale =0.5;
        pw7.velocityX = -(6 + 2*distance/150);
        pw7.addAnimation("PWHug",hug);
        pw7.setLifetime=170;
        pennyWise.add(pw7);
}

function jump8(){
        pw8 =createSprite(1100,Math.round(random(50, 250)));
        pw8.scale =0.5;
        pw8.velocityX = -(6 + 2*distance/150);
        pw8.addAnimation("PWJump",jump);
        pw8.setLifetime=170;
        pennyWise.add(pw8);
}







function reset(){
 gameState = PLAY;
 gameOver.visible = false;
 
 pennyWise.destroyEach();
  
 distance = 0;
}





