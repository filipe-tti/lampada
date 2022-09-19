const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')

function ligarlampada(){
    
    //if pra chamar a função que identifica se a lampada esta quebrada ou não.
    if( !lampadaquebrada()){
    const lampada = document.querySelector('#lampada')
    lampada.setAttribute('src','/img/ligada.jpg')
    }else{
        document.getElementById('resposta').innerHTML = '<b>A lâmpada não está funcionando!<b>'
    }
}

function desligarlampada(){
    
    
    //if pra chamar a função que identifica se a lampada esta quebrada ou não.
    if( !lampadaquebrada()){
    const lampada = document.querySelector('#lampada')
    lampada.setAttribute('src','/img/desligada.jpg')
    }else{
        document.getElementById('resposta').innerHTML = '<b>A lâmpada não está funcionando!<b>'
    }
}

function quebrarlampada(){
    const lampada = document.querySelector('#lampada')
    lampada.setAttribute('src','/img/quebrada.jpg')
}

// Pra saber se a lâmpada esta quebrada
function lampadaquebrada(){
    return lampada.src.indexOf ('quebrada') > -1
}