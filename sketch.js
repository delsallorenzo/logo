let mic, fft;

let img;
let stroke_color;

let easing = 0.1 // minore è il valore maggiore sarà l'effetto

// raggi dei cerchi
let r1 = 1;
let r2 = 1;
let r3 = 1;
let r4 = 1;
let r5 = 1;

// selezione frequenze
let i1 = 100;
let i2 = 140;
let i3 = 180;
let i4 = 260;
let i5 = 300;



function preload() {
  img = loadImage('logotipo.png');
}




function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  // attivazione microfono
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(0.9, 1024);
  fft.setInput(mic);
  
  stroke_color = color(90,165,255,127.5); // r g b alpha
  strokeWeight(2);
}




function draw() {
  
  push();
  
  translate(width/2-250, height/2-250);
  background(255); // reactivity
 

  
  // analizzatore frequenze
  let spectrum = fft.analyze();
  
  

  // CERCHIO 1
  let r1_value = map(spectrum[i1], 0, 255, 0, 250); // raggio

  let r1_value_1 = r1_value;
  let r1_value_2 = r1_value_1 - r1;
  r1 = r1 + (r1_value_2 * easing);
  
  // far scomparire il cerchio se non si parla
  if(r1 <= 8) {
    noStroke();
  }
  else {
    stroke(stroke_color);
  }
  
  noFill();
  ellipse(203.4723, 250, r1, r1);
  
  
  
  // CERCHIO 2
  let r2_value = map(spectrum[i2], 0, 255, 0, 250); // raggio

  let r2_value_1 = r2_value;
  let r2_value_2 = r2_value_1 - r2;
  r2 = r2 + (r2_value_2 * easing);

  if(r2 <= 5) {
    noStroke();
  }
  else {
   stroke(stroke_color);
  }
  
  noFill();
  ellipse(203.4723 + (12.8522 * 1), 250, r2, r2);
  
  
  
  
  // CERCHIO 3
  let r3_value = map(spectrum[i3], 0, 255, 0, 250); // raggio

  let r3_value_1 = r3_value;
  let r3_value_2 = r3_value_1 - r3;
  r3 = r3 + (r3_value_2 * easing);

   if(r3 <= 5) {
    noStroke();
  }
  else {
    stroke(stroke_color);
  }
  
  noFill();
  ellipse(203.4723 + (12.8522 * 2), 250, r3, r3);
  
  
  
  // CERCHIO 4
  let r4_value = map(spectrum[i4], 0, 255, 0, 250); // raggio

  let r4_value_1 = r4_value;
  let r4_value_2 = r4_value_1 - r4;
  r4 = r4 + (r4_value_2 * easing);

  if(r4 <= 5) {
    noStroke();
  }
  else {
   stroke(stroke_color);
  }
  
  noFill();
  ellipse(203.4723 + (12.8522 * 3), 250, r4, r4);
  
  
  
  
  // CERCHIO 5
  let r5_value = map(spectrum[i5], 0, 255, 0, 250); // raggio

  let r5_value_1 = r5_value;
  let r5_value_2 = r5_value_1 - r5;
  r5 = r5 + (r5_value_2 * easing);

  if(r5 <= 5) {
    noStroke();
  }
  else {
    stroke(stroke_color);
  }
  
  noFill();
  ellipse(203.4723 + (12.8522 * 4), 250, r5, r5);
 
  
  
pop();
  
  
  
  // LOGOTIPO
  translate(width/2, height/2);
  imageMode(CENTER);
  image(img, 0, 0, 500, 500);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function touchStarted() {
  getAudioContext().resume();
}
