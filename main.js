canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width= 100;
rover_height= 90;
rover_x= 10;
rover_y= 10;
background_img="mars.jpg";
rover_img="rover.png";
function add(){
background_imgTag= new Image();
background_imgTag.onload=uploadBackground;
background_imgTag.src= background_img;

Rover_imgTag= new Image();
Rover_imgTag.onload=uploadRover;
Rover_imgTag.src= rover_img;


}
function uploadBackground(){
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}
function uploadRover(){
    ctx.drawImage(Rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown", my_keyDown)
function my_keyDown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=="38"){
    up();
    console.log("up");

}
if(keyPressed=="37"){
   Left();
    console.log("Left");
}
if(keyPressed=="39"){
    Right();
    console.log("Right");}

    if(keyPressed=="40"){
        Down();
        console.log("Down");}
    }