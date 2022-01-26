//Code Assignment 
//by:Esmeralda Perez
//Coding train 1.3, 1.4, 1.6
//This is based on what i learned with coding
//training.

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(70,22,60);
  
  // I want to create a rectangle 
  // CHANGE THE RECTANGLE TO CENTER LATER ON
  
   rectMode(CENTER)
    fill('#fae')
   rect( 100,150,120,170)
  
  
  //PINK TRIANGLE
  stroke(color(0, 0, 255,100));
strokeWeight(70);
  triangle(200, 200, 430, 700, 100, 705);
  
  //CIRCL
  circle(299, 150, 200);
  
     
}