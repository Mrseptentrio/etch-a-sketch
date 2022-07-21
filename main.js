let color = 'black';



function drawPad(size) {
  const container = document.querySelector('.container');
  let square = container.querySelectorAll("div")
  square.forEach((div) => div.remove());
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let cells = size ** 2;
  for (let i = 0; i < cells; i++) {
    let square = document.createElement("div");
    square.addEventListener('mouseover', colorSquare);

    square.style.backgroundColor = 'white';
    container.insertAdjacentElement('beforeend', square);




  }
}

function colorSquare() {
  if (color === 'rainbow') {
    this.style.backgroundColor = '#' + parseInt(Math.random() * 0xffffff).toString(16);
  } else {
    this.style.backgroundColor = color;
  }
}

drawPad(16);


function sizeModulus(input) {
  drawPad(input)
}

function changeColor(choice) {
  color = choice;
}

