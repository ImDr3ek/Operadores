// C >> create >> cadastrar 
// R >> read >> ler 
// U >> Update >> atualizar
// D >> delete >> apagar



let dinos = []


function cadastrarDino(){
    const novodino = {
        id: Date.now(),
        nome: document.getElementById('input-nome').value,
        altura: document.getElementById('input-altura').value,
        cor: document.getElementById('input-cor').value,
        custo: Number(document.getElementById('input-preco').value)
    }

// for(let i = 0; i <= dinos.length; i++){
//     novodino.id ++ 
// }

if(novodino.nome == '' && novodino.altura == '' && novodino.cor == '' && novodino.custo == ''){
    alert('completa o formulario!!')
}else{
    dinos.push(novodino)
}

    console.log(dinos);

    limparFormulario()
    mostrarTodos()

}

function limparFormulario(){


     document.getElementById('input-nome').value = ''
     document.getElementById('input-altura').value = ''
     document.getElementById('input-cor').value = ''
     document.getElementById('input-preco').value = ''
     
     
     
     document.getElementById('input-nome').focus()
}
    
function mostrarTodos(){
document.getElementById('painelDinos').innerHTML = " "
dinos
for(let i = 0; i <= dinos.length; i++){
    document.getElementById("painelDinos").innerHTML += dinos[i].nome + "<br>" 
}

}