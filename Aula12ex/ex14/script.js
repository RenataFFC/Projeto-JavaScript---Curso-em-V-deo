function carregar() {
        var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()  
    var hora = 15
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background='#acb8c1'
    } else if (hora >=12 &&  hora <= 18){
        img.src = 'tarde.png'
        document.body.style.background='#b18283'
    } else {
        img.src = 'noite.png'
        document.body.style.background='#113049'
    }

}

