var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload(){

//   track = loadImage("C:\Documents\track.png");
//   car1_img = loadImage("C:\Documents\car1.png"); 
//   car2_img = loadImage("C:\Documents\car2.png"); 
//   car3_img = loadImage("C:\Documents\car3.png");
//  car4_img = loadImage("C:\Documents\car4.png");
//  ground = loadImage("C:\Documents\ground.png"); 


  // track = loadImage("C:\Users\Kunal\Downloads\vs222-main\vs222-main\images\track.png"); 
   //car1_img = loadImage("C:\Users\Kunal\Downloads\vs222-main\vs222-main\images\car1.png"); 
   //car2_img = loadImage("C:\Users\Kunal\Downloads\vs222-main\vs222-main\images\car2.png"); 
   //car3_img = loadImage("C:\Users\Kunal\Downloads\vs222-main\vs222-main\images\car3.png");
  //car4_img = loadImage("C:\Users\Kunal\Downloads\vs222-main\vs222-main\images\car4.png");
  //ground = loadImage("C:\Users\Kunal\Downloads\vs222-main\vs222-main\images\ground.png"); 
   // track = loadImage("C:\Users\Admin\Downloads\CarRacingStage1.5-master\CarRacingStage1.5-master\images\track.png");
   track = loadImage("images/track.png");
   car1_img = loadImage("images/car1.png");
   car2_img = loadImage("images/car2.png");
    car3_img = loadImage("images/car3.png");
    car4_img = loadImage("images/car4.png");
    ground = loadImage("images/ground.png");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play()
    
  }

  if(gameState === 2){
    game.end();
}
}
