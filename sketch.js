//creating the variables
var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;


function preload(){
  //adding the images
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  //creating the canvas
  createCanvas(1000, 600);
  //adding the database
  database = firebase.database();
  //creating the game from the game class
  game = new Game();
  //refering to the function in the game.js
  game.getState();
  game.start();
  
}

function draw() {
  //adding the background image
  background(back_img);
  //if player count is equal to 2 the game state will change to 1
   if (playerCount === 2) {
     game.update(1);
   }
   //if the game state is equal to 1 then the play function from the game.js is called
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   //if game state is equal to 2 then the game will end
   if (gameState === 2) {
    
     game.end();
   }
}