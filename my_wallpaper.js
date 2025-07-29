//your parameter variables go here!

let mouth_diameter = 60;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);

  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function


  //face
  fill(61, 133, 58);
  noStroke();
  ellipse(110, 90, 135, 135);

  //face glow
  fill(250);
  noStroke();
  ellipse(110, 90, 125, 135);

  //face
  fill(61, 133, 58);
  noStroke();
  ellipse(110, 90, 125, 125);

  //face
  fill(61, 133, 58);
  noStroke();
  ellipse(110, 95, 125, 125);



//mouth

push();
translate(0, 0);

fill(96, 166, 93);
noStroke();
ellipse(60, 100, 60, 60);

fill(96, 166, 93);
noStroke();
ellipse(100, 140, 60, 60);

fill(96, 166, 93);
noStroke();
triangle(30, 100, 30, 170, 100, 170);

fill(96, 166, 93); //space filler
noStroke();
ellipse(60, 130, 30, 30);

pop();

//shadows
fill(27, 61, 38);
noStroke();
ellipse(100, 150, 40, 40);

fill(27, 61, 38);
noStroke();
triangle(100, 150, 30, 170, 100, 170);

fill(27, 61, 38);
noStroke();
triangle(30, 160, 30, 170, 100, 160);

//inner mouth
fill(47, 84, 45);
noStroke();
ellipse(60, 110, 45, 45);

fill(47, 84, 45);
noStroke();
ellipse(90, 140, 45, 45);

fill(47, 84, 45);
noStroke();
triangle(37.5, 110, 40.5, 159.5, 90, 162.5);

fill(47, 84, 45); //space filler
noStroke();
ellipse(60, 130, 25, 25);


//nose
fill(47, 84, 45);
noStroke();
ellipse(94, 100, 10, 10);

fill(47, 84, 45);
noStroke();
ellipse(100, 106, 10, 10);

fill(47, 84, 45);
noStroke();
triangle(89, 100, 89, 111, 100, 111);

fill(47, 84, 45); //space filler
noStroke();
ellipse(95, 105, 4, 4);

fill(47, 84, 45);
noStroke();
triangle(94, 100, 100, 106, 155, 45);

//eyes
fill(255, 255, 255);
noStroke();
ellipse(97, 57, 52, 52);

fill(255, 255, 255);
noStroke();
ellipse(143, 103, 52, 52);

fill(58, 172, 207); //pupil
noStroke();
ellipse(97, 57, 25, 25);

fill(58, 172, 207); //pupil
noStroke();
ellipse(143, 103, 25, 25);


}