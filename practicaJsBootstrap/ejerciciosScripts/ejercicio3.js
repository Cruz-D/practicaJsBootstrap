
//este array almacenara los botones de la calculadora
let calcButtons = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "x", "C", 0, "=", "/"];

const buttonContainer = document.getElementById("buttonContainer");

let textScreen = document.getElementById("pText");

let buttonHTML = ``;

let text = ``

calcButtons.forEach((button, index) => {

    buttonHTML += `<div class="col-3">
                    <button id=btn-${index} class="btn btn-light calc-button w-100">${button}</button>
                </div>`;
});

buttonContainer.innerHTML = buttonHTML;

calcButtons.forEach((button, index) => {

    document.getElementById(`btn-${index}`).addEventListener('click', () => {

        switch (button) {

            case "C":

                text = ""; 
                textScreen.innerText = text; 
                break;

            case "=":
                
                text = calculate(text);
                textScreen.innerText = text;
                text = "";

                break;

            default:

                text += button; 
                textScreen.innerText = text; 
                break;
        }

    });  

});

function calculate(operacion) {

    operacion = operacion.replace(/X/g, "x");
    const operator = operacion.match(/[\+\-\x\/]/); 

    const operands = operacion.split(operator[0]);
    const num1 = parseFloat(operands[0].trim()); 
    const num2 = parseFloat(operands[1].trim()); 

    let result;

    switch (operator[0]) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "x": // En caso de que uses "x" para multiplicar
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                throw new Error("No se puede dividir entre cero.");
            }
            result = num1 / num2;
            break;
        default:
            throw new Error("Operador no válido.");
    }

    return result;
}