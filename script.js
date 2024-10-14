let currentNumber = 1;
const maxNumber = 400; // Cambia este valor para definir el número máximo
const audio = new Audio('audio.mp3'); // Carga el archivo de audio

// Selecciona los elementos
const numberElement = document.getElementById('number');

// Función para actualizar el número
function updateCarousel() {
    numberElement.textContent = currentNumber;
    audio.play(); // Reproduce el audio cada vez que se actualiza el número
}

// Evento para cambiar el número con las teclas de flecha
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        if (currentNumber < maxNumber) {
            currentNumber++;
        } else {
            currentNumber = 1; // Reinicia a 1 cuando llegue al máximo
        }
        updateCarousel();
    } else if (event.key === 'ArrowLeft') {
        if (currentNumber > 1) {
            currentNumber--;
        } else {
            currentNumber = maxNumber; // Regresa al máximo cuando llegue a 1
        }
        updateCarousel();
    } else if (event.key === ' ') { // Detecta la tecla Espacio
        audio.play(); // Solo reproduce el audio sin cambiar el número
    }
});

// Actualiza el carrusel con el número inicial
updateCarousel();

// Código para asignar la imagen del logo
/*document.addEventListener("DOMContentLoaded", function() {
    const logoElement = document.getElementById('logo');
    logoElement.src = '/logo_mana1.png'; // Asigna la fuente de la imagen
});*/
