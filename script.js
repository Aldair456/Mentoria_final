const messages = [
    "¡Sigue esforzándote!",
    "¡Puedes lograr lo que te propongas!",
    "¡No te rindas, estás muy cerca!",
    "¡Cada paso te lleva más cerca de tu meta!",
    "¡Cree en ti mismo y todo será posible!",
    "¡La perseverancia es la clave del éxito!",
    "¡Nunca dejes de soñar!",
    "¡Tu esfuerzo dará frutos pronto!",
    "¡El éxito está a la vuelta de la esquina!",
    "¡Tu determinación es inspiradora!"
];

function showMessage() {
    const nameInput = document.getElementById('nameInput').value;
    const message = document.getElementById('message');
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    if (nameInput.trim() !== '') {
        message.textContent = `${randomMessage}, ${nameInput}!`;
        message.classList.remove('hidden');
    } else {
        message.textContent = 'Por favor, ingresa tu nombre.';
        message.classList.remove('hidden');
    }
}
