var u = document.querySelectorAll(".drum").length;
for (var i = 0; i < u; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
function handleClick() {
  var btn = this.innerHTML;
  makeSound(btn);
  buttunAnimation(btn);
}
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttunAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
    case "W":
      var audio = new Audio("/Drum Kit/sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("/Drum Kit/sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("/Drum Kit/sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("/Drum Kit/sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("/Drum Kit/sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("/Drum Kit/sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("/Drum Kit/sounds/kick-bass.mp3");
      audio.play();
      break;
  }
}

function buttunAnimation(currentKey) {
  var actBtn = document.querySelector("." + currentKey);
  actBtn.classList.add("pressed");
  setTimeout(function () {
    actBtn.classList.remove("pressed");
  }, 100);
}
