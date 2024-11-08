// Selecciona el contenedor de la foto de perfil y el mensaje secreto
const fotoPerfilWrapper = document.querySelector('.foto-perfil-wrapper');
const mensajeSecreto = document.querySelector('.mensaje-secreto');
const hoverSound = document.getElementById('hoverSound');

// Evento para mostrar el mensaje secreto y reproducir el audio al pasar el cursor
fotoPerfilWrapper.addEventListener('mouseover', () => {
    mensajeSecreto.style.display = 'block';
    hoverSound.play(); // Reproduce el audio
});

// Evento para ocultar el mensaje secreto al quitar el cursor
fotoPerfilWrapper.addEventListener('mouseout', () => {
    mensajeSecreto.style.display = 'none';
    hoverSound.pause(); // Pausa el audio cuando se quita el cursor
    hoverSound.currentTime = 0; // Reinicia el audio al inicio para la próxima vez
});
