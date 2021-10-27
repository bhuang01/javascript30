window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // Stops the function if an invalid key is pressed
  audio.currentTime = 0; // Rewinds audio clip
  audio.play(); // Plays the selected audio
  key.classList.add("playing");
});

// Function to remove the key transition
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
  console.log(this);
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
