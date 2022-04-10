function preload(){
    img = loadImage("https://images.unsplash.com/photo-1537824598505-99ee03483384?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2NlbmVyeXxlbnwwfHwwfHw%3D&w=1000&q=80");
  }
  function setup(){
    createCanvas(500, 500);
  }
  function draw(){
    background ("blue")
    circle (50, 50, 60)
    circle (50, 450, 60)
    circle (450, 450, 60)
    circle (450, 50, 60)
    square (35, 32, 430, 35)
    square (32, 35, 35, 430)
    square (432, 32, 35, 430)
    square (32, 432, 430, 35)

    
    image(img, 200, 200, 120, 120)
  }
function TakeSnap(){
  save("Bob.png")
}
function ApplyFilter(){
    Ci = document.getElementById("colorInput").value;
    tint(Ci);
}