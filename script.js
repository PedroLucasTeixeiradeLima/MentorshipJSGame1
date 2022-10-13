let pointer = document.getElementById("point");

const modifier = 0.5;
let verticalPosition = 5;
let horizontalPosition = 5;
pointer.style.top = `${verticalPosition}vh`;
pointer.style.left = `${horizontalPosition}vw`;

document.addEventListener(
  "keydown",
  (event) => {
    var name = event.key;
    var code = event.code;
    switch (code) {
      case "ArrowUp":
        verticalPosition -= modifier;
        pointer.style.top = `${verticalPosition}vh`;
        break;
      case "ArrowDown":
        verticalPosition += modifier;
        pointer.style.top = `${verticalPosition}vh`;
        break;
      case "ArrowLeft":
        horizontalPosition -= modifier;
        pointer.style.left = `${horizontalPosition}vw`;
        break;
      case "ArrowRight":
        horizontalPosition += modifier;
        pointer.style.left = `${horizontalPosition}vw`;
        break;
    }
  },
  false
);
