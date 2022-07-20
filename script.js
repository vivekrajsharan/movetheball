let movingBall = document.getElementById("movingBall");

movingBall.style.top = movingBall.offsetTop + "px";
movingBall.style.left = movingBall.offsetLeft + "px";

let movingBallHeight = movingBall.offsetHeight;
let movingBallWidth = movingBall.offsetWidth;

function setValue(value) {
  return value + "px";
}

function keyPressed(keyPress) {
  let top = parseInt(movingBall.style.top);
  let left = parseInt(movingBall.style.left);

  // W is pressed
  if (keyPress === 119 || keyPress === 87) {
    if (top > 5) {
      movingBall.style.top = setValue(top - 5);
    }
  }

  // A is pressed
  else if (keyPress === 97 || keyPress === 65) {
    if (left > 5) {
      movingBall.style.left = setValue(left - 5);
    }
  }

  // S is pressed
  else if (keyPress === 115 || keyPress === 83) {
    if (top < window.innerHeight - movingBallHeight - 5) {
      movingBall.style.top = setValue(top + 5);
    }
  }

  // D is pressed
  else if (keyPress === 100 || keyPress === 68) {
    if (left < window.innerWidth - movingBallWidth - 5) {
      movingBall.style.left = setValue(left + 5);
    }
  }
}

window.addEventListener("keypress", function (event) {
  keyPressed(event.keyCode);
});
