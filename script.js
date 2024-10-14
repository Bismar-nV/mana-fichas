let currentNumber = 1;
const maxNumber = 400; // Cambia este valor para definir el número máximo
const audio = new Audio('audio.mp3'); // Carga el archivo de audio

// Selecciona los elementos
const numberElement = document.getElementById('number');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Función para actualizar el número
function updateCarousel() {
    numberElement.textContent = currentNumber;
    audio.play(); // Reproduce el audio cada vez que se actualiza el número
}

// Evento para cambiar el número con las teclas de flecha
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        nextNumber();
    } else if (event.key === 'ArrowLeft') {
        prevNumber();
    } else if (event.key === ' ') { // Detecta la tecla Espacio
        audio.play(); // Solo reproduce el audio sin cambiar el número
    }
});

// Función para incrementar el número
function nextNumber() {
    if (currentNumber < maxNumber) {
        currentNumber++;
    } else {
        currentNumber = 1; // Reinicia a 1 cuando llegue al máximo
    }
    updateCarousel();
}

// Función para disminuir el número
function prevNumber() {
    if (currentNumber > 1) {
        currentNumber--;
    } else {
        currentNumber = maxNumber; // Regresa al máximo cuando llegue a 1
    }
    updateCarousel();
}

// Añade eventos a los botones de flecha
nextButton.addEventListener('click', nextNumber);
prevButton.addEventListener('click', prevNumber);

// Actualiza el carrusel con el número inicial
updateCarousel();
