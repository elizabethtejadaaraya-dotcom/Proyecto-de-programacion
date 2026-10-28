function pedirPerdon() {
    const mensaje = "Rhys ha decidido reflexionar y pedir perdón, al pedir perdón su madre se conmueve y lo perdona y Rhys se tranquiliza. ❤️";
    document.getElementById('mensajePerdon').innerText = mensaje;
    
    const modalElement = document.getElementById('perdonModal');
    const perdonModal = new bootstrap.Modal(modalElement);
    perdonModal.show();
}