//add listener to all buttons:
var numOfDrumBtns = document.querySelectorAll(".drum").length;

//detect button press
for(var i=0; i<numOfDrumBtns; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var btnInnerHTML = this.innerHTML;
        makeSound(btnInnerHTML);
        btnAnimation(btnInnerHTML);
    });
}

//detect key press
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    btnAnimation(event.key);
})

function makeSound(key){
    switch(key){
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;  

        default: console.log(btnInnerHTML);
    }
}

//make buttons ligth up when activated
function btnAnimation(currentKey){
    var activeBtn = document.querySelector("." + currentKey);
    activeBtn.classList.add("pressed");
    setTimeout(function (){
        activeBtn.classList.remove("pressed");
    }, 100)
}

  