//your parameter variables go here!

var eyex = -10;
var eyey = 10;
var mouthx = -10;
var mouthy = 10;
var facesize = 1.02; //original 1
var mviolet = 'violet';
var epurple = 'purple';



function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);

  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 50;
}

function wallpaper_background() {
  // noStroke();
  // background(250, 240, 245); 
}


function drawface(x, y) {
  //face
  fill(61, 133, 58);
  noStroke();
  ellipse(110, 90, 135, 135);

  //face glow
  fill(250);
  noStroke();
  ellipse(110, 90, 125, 135);


  fill(61, 133, 58);
  noStroke();
  ellipse(110, 90, 125, 125);
  ellipse(110, 95, 125, 125);
}


function drawmouth(x, y) {
  //mouth
  fill(96, 166, 93);
  noStroke(0);
  ellipse(60, 100, 60, 60);
  ellipse(100, 140, 60, 60);
  triangle(30, 100, 30, 170, 100, 170);
  ellipse(60, 130, 30, 30); //space filler

  //shadows
  fill(27, 61, 38);
  noStroke();
  ellipse(100, 150, 40, 40);
  triangle(100, 150, 30, 170, 100, 170);
  triangle(30, 160, 30, 170, 100, 160);

  //inner mouth
  fill(mfill);
  noStroke();
  ellipse(60, 110, 45, 45);
  ellipse(90, 140, 45, 45);
  triangle(37.5, 110, 40.5, 159.5, 90, 162.5);
  ellipse(60, 130, 25, 25); //space filler

}

function drawnose(x, y) {
  //nose
  fill(47, 84, 45);
  noStroke();
  ellipse(94, 100, 10, 10);
  ellipse(100, 106, 10, 10);
  triangle(89, 100, 89, 111, 100, 111);
  ellipse(95, 105, 4, 4); //space filler
  triangle(94, 100, 100, 106, 155, 45);

}

function draweyes(x, y) {
  //eyes
  fill(255, 255, 255);
  noStroke();
  ellipse(97, 57, 52, 52);
  ellipse(143, 103, 52, 52);

  fill(efill); //pupil
  noStroke();
  ellipse(97, 57, 25, 25);
  ellipse(143, 103, 25, 25);


}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  //IF Statement
  if (facesize > 1.05) {
    mfill = mviolet;
    efill = epurple;
  } else {
    mfill = color(47, 84, 45);
    efill = color(58, 172, 207);
  }

  //background
  fill(133, 237, 140);
  noStroke();
  triangle(0, 0, 0, 200, 200, 0);

  fill(25, 79, 38);
  noStroke();
  triangle(0, 200, 20, 200, 200, 0);
  triangle(0, 200, 200, 0, 200, 20);
  triangle(0, 200, 200, 0, 100, 100);

  //top
  fill(68, 130, 150);
  noStroke();
  rect(0, 0, 200, 30);
  triangle(0, 0, 2, 200, 30, 0);

  fill(107, 205, 237);
  noStroke();
  rect(0, 0, 200, 20);
  triangle(0, 0, 0, 220, 20, 0);


  //draw face
  push();
  translate(0, 0);
  scale(facesize);
  drawface();

  pop();

  //draw mouth
  push();
  translate(mouthx, mouthy);
  scale(1);
  drawmouth();
  pop();

  //draw nose
  push();
  translate(0, 0);
  scale(1);
  drawnose();
  pop();

  //draw eyes
  push();
  translate(eyex, eyey);
  scale(1);
  draweyes();
  pop();

}