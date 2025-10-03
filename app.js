const imagem = document.querySelectorAll('img');
let foto_troca = false;

function trocarFoto() {
    if (foto_troca === false) {
        for (let i = 0; i < imagem.lenght; i++) {
            imagem[i].src = `brino${i + 9}.jpg`
        }
        foto_troca = true;
    } else {
        for (let i = 0; i < imagem.length; i++) {
            imagem[i].src = `brino${i + 1}.jpg`
        }
        foto_troca = false;
    }
}