// make sound when pressing the button 
for (var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var hittedButtonByClick = this.innerHTML;
        makeSound(hittedButtonByClick);
        buttonAnimation(hittedButtonByClick);
    });        
}

// make sound when pressing the key
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})






// function that takes input as button-press or as a key-press to make sound
function makeSound(char){
    switch (char) {
        case "w":
            var crs = new Audio("./sounds/crash.mp3");
            crs.play();
            break;
        case "a":
            var crs = new Audio("./sounds/kick-bass.mp3");
            crs.play();
            break;
        case "s":
            var crs = new Audio("./sounds/snare.mp3");
            crs.play();
            break;
        case "d":
            var crs = new Audio("./sounds/tom-1.mp3");
            crs.play();
            break;
        case "j":
            var crs = new Audio("./sounds/tom-2.mp3");
            crs.play();
            break;
        case "k":
            var crs = new Audio("./sounds/tom-3.mp3");
            crs.play();
            break;
        case "l":
            var crs = new Audio("./sounds/tom-4.mp3");
            crs.play();
            break;
        
        default: console.log(char);
    
    }
}
function buttonAnimation(pressedButton){
    var pB = document.querySelector("."+pressedButton);
    pB.classList.add("pressed");
    setTimeout(function(){
        pB.classList.remove("pressed"),5000
    });
    
};
