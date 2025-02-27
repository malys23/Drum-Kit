//add listener to all buttons:
var numOfDrumBtns = document.querySelectorAll(".drum").length;
for(var i=0; i<numOfDrumBtns; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){alert("I got clicked")});
}
