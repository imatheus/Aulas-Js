const elementoLista = document.querySelector('ul');
const elementoInput = document.querySelector('input');
const elementoBotao = document.querySelector('button');

const tarefas = []

function mostraTarefas(){
    elementoLista.innerHTML = ''
    for (tarefa of tarefas){
        const elementoTarefa = document.createElement('li')
        const textoTarefa = document.createTextNode(tarefa)
        
        const elementLink = document.createElement('a')
        const pos = tarefas.indexOf(tarefa)

        const linkText = document.createTextNode('X')
                
        elementLink.appendChild(linkText)
        elementLink.setAttribute('onclick', `removeTarefas(${pos})`)


        elementoTarefa.appendChild(textoTarefa)
        elementoLista.appendChild(elementoTarefa)
        elementoTarefa.appendChild(elementLink)
    }

}




function addTarefas(){
    const textoTarefa = elementoInput.value
    tarefas.push(textoTarefa)
    elementoInput.value = ''

    mostraTarefas()
}

function removeTarefas(pos){
    tarefas.splice(pos,1)
    
    mostraTarefas()
    
    }
    

elementoBotao.setAttribute('onclick', 'addTarefas()')