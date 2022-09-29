let pointer = document.getElementById("point");

document.addEventListener(
  "keydown",
  (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    // console.log(`Key pressed ${name} \r\n Key code value: ${code}`);
    switch (code) {
      case "ArrowUp":
        console.log("Cima");
        break;
      case "ArrowDown":
        console.log("Baixo");
        break;
      case "ArrowLeft":
        console.log("Esquerda");
        break;
      case "ArrowRight":
        console.log("Direita");
        break;
    }
  },
  false
);
