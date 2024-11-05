var drumLength = document.querySelectorAll(".drum").length;

var audiosPath = [
    'sounds/crash.mp3',
    'sounds/kick-bass.mp3',
    'sounds/snare.mp3',
    'sounds/tom-1.mp3',
    'sounds/tom-2.mp3',
    'sounds/tom-3.mp3',
    'sounds/tom-4.mp3',
];

for (var count = 0; count < drumLength; count++) {
    document
        .querySelectorAll(".drum")
    [count].addEventListener("click", function () {
        var buttonHTML = this.innerHTML;
        makeSound(buttonHTML);
        buttonAnimation(buttonHTML);
    });
}

document.addEventListener("keypress", function (event) {

    makeSound(event.key);
    buttonAnimation(event.key);
})


function makeSound(key) {
    switch (key) {
        case "w":
            var audio1 = new Audio(audiosPath[0]);
            audio1.play();

            break;
        case "a":
            var audio2 = new Audio(audiosPath[1]);
            audio2.play();

            break;

        case "s":
            var audio3 = new Audio(audiosPath[2]);
            audio3.play();

            break;
        case "d":
            var audio4 = new Audio(audiosPath[3]);
            audio4.play();

            break;
        case "j":
            var audio5 = new Audio(audiosPath[4]);
            audio5.play();

            break;
        case "k":
            var audio6 = new Audio(audiosPath[5]);
            audio6.play();

            break;
        case "l":
            var audio7 = new Audio(audiosPath[6]);
            audio7.play();

            break;

        default: console.log(buttonHTML);
    }
}


function buttonAnimation(key) {
    var activebutton = document.querySelector("." + key);
    activebutton.classList.add("pressed");
    setTimeout(() => {

        activebutton.classList.remove("pressed")
    }, 100);

}