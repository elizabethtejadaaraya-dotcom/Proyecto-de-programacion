function pedirPerdon() {
    const mensaje = "Rhys ha decidido reflexionar y pedir perdón... El ambiente en la casa se calma y el nivel de emoción se estabiliza. ❤️";
    document.getElementById('mensajePerdon').innerText = mensaje;
    
    const modalElement = document.getElementById('perdonModal');
    const perdonModal = new bootstrap.Modal(modalElement);
    perdonModal.show();
}