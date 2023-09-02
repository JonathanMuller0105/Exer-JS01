function carregar () {
    var msg = window.document.getElementById(`msg`)
    var imagen = window.document.getElementById(`imagem`)
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora}horas.`;
    if (hora >= 0 && hora < 12){
        //Bom dia!
        imagen.src = `1.png`
        document.body.style.backgroundColor = `#e2cd9f`
        msg.innerHTML = `Bom dia! Agora são ${hora}horas.`;
    }else if (hora >= 12 && hora < 18){
        // Boa tarde!
        imagen.src = `3.png`
        document.body.style.backgroundColor = `#b9846f`
        msg.innerHTML = `Boa tarde! Agora são ${hora}horas.`;
    }else {
        //Boa noite!
        imagen.src = `2.png`
        document.body.style.backgroundColor = `#515154`
        msg.innerHTML = `Boa noite! Agora são ${hora}horas.`;
    }
}

