var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"]; // my color list
var level = 0;
var gameStarted = false;

//to detect any button press in keyboard

$(document).on('keypress', function (e) {

    if (gameStarted == false) {
        $('#level-title').text('Level ' + level);

        nextSequence();

    }
    gameStarted = true;

});

$(".btn").click(
    function () {
        var userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
        console.log(userClickedPattern);
        playSound(userChosenColour);
        animatePress(userChosenColour);

        checkAnswer(userClickedPattern.length - 1);
    }
);



function nextSequence() {
    level++;

    $('#level-title').text('Level ' + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    //1. Use jQuery to select the button with the same id as the randomChosenColour
    //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    animatePress(randomChosenColour);


}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();


}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);




}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[gamePattern.length - 1]) {

        console.log("success");
        setTimeout(function () {
            nextSequence();
            userClickedPattern = [];
        }, 1000);


    } else {
        console.log("failed");

    }


}