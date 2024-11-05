
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"]; // my color list
// variable to  store the random color

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4); // for generating random number form 0-4
    console.log(randomNumber);
    return buttonColours[randomNumber];
}
var randomChosenColour = nextSequence();// to asign teh random color to the variable
gamePattern.push(randomChosenColour);


$("." + randomChosenColour).click(
    function () {
        $("." + randomChosenColour).fadeOut(100).fadeIn(100);
        playSound(randomChosenColour);
    }
);

function playSound(color) {
    if (color === "red") {
        const redAudio = new Audio("./sounds/red.mp3");
        redAudio.play();
    } else if (color === "blue") {
        const blueAudio = new Audio("./sounds/blue.mp3");
        blueAudio.play();
    } else if (color === "green") {
        const greenAudio = new Audio("./sounds/green.mp3");
        greenAudio.play();
    } else if (color === "yellow") {
        const yellowAudio = new Audio("./sounds/yellow.mp3");
        yellowAudio.play();
    } else {
        const wrongAudio = new Audio("./sounds/wrong.mp3");
        wrongAudio.play();
    }


}