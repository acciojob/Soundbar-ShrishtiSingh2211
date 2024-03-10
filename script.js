//your JS code here. If required.
const buttons = document.querySelectorAll(".btn");
const stopButton = document.querySelector(".stop");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    stopSounds();
    const soundName = button.getAttribute("data-sound");
    const sound = new Audio(`sounds/${soundName}.mp3`);  // Assuming sound files are .mp3
    sound.play();
  });
});

stopButton.addEventListener("click", stopSounds);

function stopSounds() {
  buttons.forEach(button => {
    const soundName = button.getAttribute("data-sound");
    const sound = new Audio(`sounds/${soundName}.mp3`);
    sound.pause();
    sound.currentTime = 0;
  });
}