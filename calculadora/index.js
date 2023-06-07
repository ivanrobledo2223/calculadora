const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero')
const botonesOperadores = document.querySelectorAll('.operador')

const calculadora = new Display(displayValorAnterior, displayValorActual);

Array.from(botonesNumeros).forEach((btn) => {
    btn.addEventListener('click', (event) => procesarEventoNumero(event))
})

Array.from(botonesOperadores).forEach((btn) => {
    btn.addEventListener('click', (event) => procesarEventoOperador(event))
})


function procesarEventoNumero(event) {
    console.log(event.target.textContent);

    let numero = event.target.textContent;

    calculadora.agregarNumero(numero);
}

function procesarEventoOperador(event) {
    console.log(event.target.textContent);

    let operador = event.target.textContent;

    switch (operador.toUpperCase()) {
        case "+":
            calculadora.computar('sumar');
            break;
        case "-":
            calculadora.computar('restar');
            break;
        case "X":
            calculadora.computar('multiplicar');
            break;
        case "/":
            calculadora.computar('dividir');
            break;
        case "=":
            calculadora.computar('igual');
            break;
        case "C":
            calculadora.borrarTodo();
    }

} 
