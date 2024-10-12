let currentNumber = 1;
const maxNumber = 400; // Cambia este valor para definir el número máximo

// Selecciona los elementos
const numberElement = document.getElementById('number');

// Función para actualizar el número
function updateCarousel() {
    numberElement.textContent = currentNumber;
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
    }
});

// Actualiza el carrusel con el número inicial
updateCarousel();

// Código para asignar la imagen del logo
document.addEventListener("DOMContentLoaded", function() {
    const logoElement = document.getElementById('logo');
    logoElement.src = '/logo_mana1.png'; // Asigna la fuente de la imagen
});
