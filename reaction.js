let startTime, endTime;
let timeoutID;
let waitingForGreen = false;

function startTest() {
  document.getElementById("reactionBox").style.backgroundColor = "#990000";
  document.getElementById("reactionMessage").textContent = "Wait for it...";
  document.getElementById("result").textContent = "";

  let delay = Math.floor(Math.random() * 4000) + 1000; // 1 to 5 seconds

  waitingForGreen = false;

  timeoutID = setTimeout(() => {
    document.getElementById("reactionBox").style.backgroundColor = "green";
    document.getElementById("reactionMessage").textContent = "CLICK!";
    startTime = new Date().getTime();
    waitingForGreen = true;
  }, delay);
}

function recordReaction() {
  if (!waitingForGreen) {
    clearTimeout(timeoutID);
    document.getElementById("reactionMessage").textContent = "Too soon! Try again.";
    return;
  }

  endTime = new Date().getTime();
  let reactionTime = endTime - startTime;
  document.getElementById("result").textContent = `Your reaction time: ${reactionTime} ms`;

  waitingForGreen = false;
}