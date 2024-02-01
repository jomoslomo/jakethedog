// My character is Jake the Dog from the animated TV show Adventure Time
// I also added the character BMO from the same tv show 
// Jake's eyes blink every six seconds
// BMO wave his hand every two seconds
// Clouds generate every two, three, and four seconds
// "Adventure Time" generates every ten seconds
var 
// Sun and Moon move with respect to mouseY
myFont;
function preload() {
  myFont = loadFont('Adventure Time Logo.ttf');
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  //translate(displayWidth, displayHeight);
  scale(2)

  background(220);
  
  
  if(mouseY >= 300){
  fill(0, 0, mouseY);
  rect(0,0,400,200);
  fill(140,235,231,255);
  ellipse(100, mouseY-300, 40);
  fill(129,226,216,255);
  ellipse(95, mouseY-300, 2);
  fill(129,226,216,255);
  ellipse(104, mouseY-290, 4);
  fill(129,226,216,255);
  ellipse(86, mouseY-291, 4);
  fill(129,226,216,255);
  ellipse(95, mouseY-284, 3);
  }
  else{
  fill(97,232,255);
  rect(0,0,400,200);
    fill('orange');
  ellipse(300,mouseY, mouseY);
  fill('yellow');
  ellipse(300, mouseY, mouseY/1.25);
  }
  
  
  
  
  fill(163,255,95,255);
  rect(0,200,400,400);

  
  fill(104,198,165,255)
  rect(20, 190, 30, 40, 10);
  fill(231,243,234,255);
  rect(25,195, 20, 15, 5);
  fill(16,51,62,255);
  rect(25,213, 10,2);
  fill(49,34,125,255);
  ellipse(42, 214, 2);
  fill(255,255,49,255);
  rect(27.5,218.7, 4,1);
  rect(29,217.5, 1,4);
  fill(54,38,137,255);
  rect(26,224, 3,1, 10);
  rect(31,224, 3,1, 10);
  fill(54,176,245,255);
  triangle(37,220, 38,218, 39,220);
  fill(232,0,44,255);
  ellipse(38,224, 3.6);
  fill(57,186,77,255);
  ellipse(43,221, 1.8);
  curve(28,205, 30,200, 32,200, 34,205);
  curve(36,205, 38,200, 40,200, 42,205);
  curve(28,203, 34,204, 36, 204, 32,203);
  fill(103,172,179,255);
  rect(42,230, 1,6);
  rect(28,230, 1,6);
  
  beginShape();
    strokeWeight(2);
    vertex(50,219);
    bezierVertex(52,218, 54,228, 55,230);
  endShape();
  
  let b = second();
  if(b%2 == 0){
  beginShape();
    vertex(20,219);
    bezierVertex(18,220, 16,210, 15,205);
  endShape();
  }
  else{
    beginShape();
    vertex(20,219);
    bezierVertex(18,220, 16,210, 10,205);
  endShape();
  }
  strokeWeight(1);
  let s = second(); 
   
  
  if(s % 2 == 0 && s%3 != 0 && s %4 != 0){
    fill(255, 10);
    erase();
    ellipse(100,40, 60,20);
    ellipse(110,30, 60,20);
    ellipse(100,20, 60,20);
    ellipse(90,30, 60,20);
    noErase();
  }
  if(s% 3 == 0 && s%2 != 0 && s %4 != 0){
    erase();
    ellipse(200,40, 60,20);
    ellipse(210,30, 60,20);
    ellipse(200,20, 60,20);
    ellipse(190,30, 60,20);
    noErase();
  }
  if(s% 4 == 0){
    erase();
    ellipse(300,40, 60,20);
    ellipse(310,30, 60,20);
    ellipse(300,20, 60,20);
    ellipse(290,30, 60,20);
    noErase();
  }
  else{
    s =1;
  }

  beginShape();
  fill(245,187,18);
    vertex(100,250);  
    bezierVertex(50, 15, 350,15,300,250);
  endShape();
  beginShape();
    fill(245,187,18);
    vertex(100,250);
    bezierVertex(25, 390, 375,390,300,250)
  endShape();
  
  let j = second();
  if(j%6==0){
    fill(245,187,18);
  ellipse(150,150,50);
  ellipse(250, 150, 50);
  line(125,150, 175,150);
  line(225,150, 275,150);
  }
  else
  {
    fill(0); //eyes
  ellipse(150,150,50);
  ellipse(250, 150, 50);
  fill(255);
  ellipse(155,150,45);
  ellipse(255,150,45);
  }
  
  
  noFill();
  curve(100, 20, 105, 155, 115, 155, 100, 90);
  curve(300,20, 295, 155, 285, 155, 300, 90);
  beginShape();
    fill(245,187,18);
    vertex(180,140);
    bezierVertex(150,200,190,200,195,160);
  endShape();

  beginShape();
    vertex(220,140);
    bezierVertex(250,200,210,200,205,160);
  endShape();
 
  curve(180,200, 180.5,140, 219.5,140, 220,200);
  curve(200,90, 190.5,175, 209.5,175, 200,90);
  fill(0);
  ellipse(200,160,25,15);

  fill(194,123,57,255);
  ellipse(200,225, 40, 70);  

  fill(221,155,94,255);
  ellipse(200, 210, 20, 5);
  ellipse(200, 225, 20, 5);
  ellipse(200, 240, 20, 5);

  
  beginShape();
    fill(245, 187,18); 
    vertex(120, 200); //left arm curve 1
    bezierVertex(150,300, 165,250, 185,230);
  endShape();
  
  beginShape();
    fill(245, 187,18);
    vertex(135, 200); //left arm curve 2
    bezierVertex(150,280, 165,240, 170,230);
    vertex(170,230); //left hand
    bezierVertex(175,220, 190,220, 185,230);
  endShape();
  
  beginShape();
    fill(245, 187,18); 
    vertex(280, 200); //right arm curve 1
    bezierVertex(250,300, 235,250, 215,230);
  endShape();
  
  beginShape();
    fill(245, 187,18);
    vertex(265, 200); //right arm curve 2
    bezierVertex(250,280, 235,240, 230,230);
    vertex(230,230); //right hand
   bezierVertex(230,220, 210,220, 215,230);
  endShape();
  
  beginShape();
    fill(245,187,18);
    vertex(90,290);//tail curve 1
    bezierVertex(75,290, 70, 270, 60,265);  
 vertex(60,265);// tail curve 2
        bezierVertex(71,266, 75, 281, 90,280);
  endShape();

  beginShape();
    fill(245,187,18);
    vertex(120,335);
    bezierVertex(150,350, 200,390, 215,340);
    bezierVertex(215, 320, 200, 320, 180, 340)
  line(180,340, 130, 320)
  endShape();
  
  beginShape();
    vertex(280, 335);
    bezierVertex(250,350, 200, 390, 185,340);
    bezierVertex(185, 320, 200, 320, 220, 340);
  line(220,340, 270,320);
  endShape();
  
  
  
  let h = second();
  if(h%10 == 0)
  {
  	fill(255, 0, 0);
	textSize(30);
  // This name refers to the Google Fonts embedded in index.html
	textFont(myFont);
	text("ADVENTURE TIME", 80, 90);
  }
}



  