const formulario = document.getElementById('form')

formulario.addEventListener('submit', function(e){
    e.preventDefault()
    const mensagemFeedback = document.getElementById('mensagem-feedback')
    let campoA = document.getElementById('campo-a').value
    let campoB = document.getElementById('campo-b').value
    
    let numeroA = Number(campoA);
    let numeroB = Number(campoB);    
    
    if (numeroA < numeroB){  
        mensagemFeedback.style.display = 'block'
        mensagemFeedback.innerHTML = `Formulário válido, o valor do primeiro número é maior do que o Segundo!`
        clear()
        
    } else {
        mensagemFeedback.style.display = 'block'
        mensagemFeedback.innerHTML = `Formulário inválido, o valor do primeiro número é menor do que o Segundo!`
        clear()
    }
})

function clear() {
    document.getElementById('campo-a').value = ''
    document.getElementById('campo-b').value = ''
}