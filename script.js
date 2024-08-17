document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('answerButton');
    button.addEventListener('click', () => {
        button.style.transform = 'scale(1.5)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
            // Redirige a la nueva página después de que el botón vuelva a su tamaño original
            window.location.href = 'mensaje.html';
        }, 300); // Tiempo de transición del tamaño del botón
    });
});




