let bttnSend = document.querySelector('#botao-enviar');

function comportamentoPadrao (event) {
    event.preventDefault();
}

bttnSend.addEventListener('click', comportamentoPadrao);
