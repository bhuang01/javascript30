const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  // Remove the transition effect when the hand reaches the top
  if (!seconds) {
    secondHand.classList.add("notransition");
  }
  if (seconds == 1) {
    secondHand.classList.remove("notransition");
  }

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  if (!minutes) {
    minuteHand.classList.add("notransition");
  }
  if (minutes == 1) {
    minuteHand.classList.remove("notransition");
  }

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  if (!hours) {
    hourHand.classList.add("notransition");
  }
  if (hours == 1) {
    hourHand.classList.remove("notransition");
  }

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
