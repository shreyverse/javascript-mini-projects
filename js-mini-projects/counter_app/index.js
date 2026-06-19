var count = 0;
var countDisplay = document.getElementById("counter");
var incrementButton = document.getElementById("increase");
var decrementButton = document.getElementById("decrease");
var resetButton = document.getElementById("reset");   
incrementButton.addEventListener("click", function(){
    count++;
    countDisplay.textContent = count; 
});
decrementButton.addEventListener("click", function(){
    count--;
    countDisplay.textContent = count; 
});          
resetButton.addEventListener("click", function(){
    count = 0;
    countDisplay.textContent = count; 
});     