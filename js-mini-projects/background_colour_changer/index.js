var button1 = document.getElementById("button1");
var colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "cyan", "magenta", "lime", "teal", "maroon", "navy", "olive", "gray", "silver"];
button1.addEventListener("click", function() {
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  document.body.style.backgroundColor = randomColor;
});