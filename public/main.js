function listaItemHTMLString(idNum, dataString, tarefaDescricao) {
    return `
    <div class="lista-item" id="lista-item-${idNum}">
        <span class="lista-item-data">${dataString}</span>
        <div class="lista-item-conteudo">
            <button class="lista-item-botao-completar-tarefa" 
                    onclick="completarTarefa('${idNum}')">
            </button>
            <span class="lista-item-tarefa">${tarefaDescricao}</span>
        </div>
    </div>`;
}

function completarTarefa(idNum) {
    const id = `lista-item-${idNum}`;
    document.getElementById(id).remove();
}

function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

let listaBaixaItens;
let listaMediaItens;
let listaAltaItens;

let incluiTarefaDescricaoInput;
let incluiTarefaDataInput;
let incluiTarefaPrioridadeSelect;

window.addEventListener('DOMContentLoaded', function () {
    const listaBaixa = document.getElementById('lista-baixa');
    listaBaixaItens = listaBaixa.getElementsByClassName('lista-itens')[0];


    const listaMedia = document.getElementById('lista-media');
    listaMediaItens = listaMedia.getElementsByClassName('lista-itens')[0];

    const listaAlta = document.getElementById('lista-alta');
    listaAltaItens = listaAlta.getElementsByClassName('lista-itens')[0];


    incluiTarefaDescricaoInput = document.getElementById('inclui-tarefa-descricao-input');
    incluiTarefaDataInput = document.getElementById('inclui-tarefa-data-input');
    incluiTarefaPrioridadeSelect = document.getElementById('inclui-tarefa-prioridade-select');
});

function incluiTarefaEnviar() {
    const descricao = incluiTarefaDescricaoInput.value;
    const data = incluiTarefaDataInput.valueAsDate;
    const prioridade = incluiTarefaPrioridadeSelect.value;

    if (!descricao || !data || !prioridade) {
        alert('Preencha todos os campos :)');
        return;
    }

    const idNum = crypto.randomUUID().split('-')[0];

    const dataFormatada = data.toLocaleString(undefined, {
        day: 'numeric', 
        month: 'numeric', 
        year: 'numeric',
        timeZone: 'UTC'
    });

    const novoItemHTMLString = listaItemHTMLString(idNum, dataFormatada, descricao);
    const elementoNovoItem = htmlToElement(novoItemHTMLString);

    let lista;

    switch (prioridade) {
        case 'baixa':
            lista = listaBaixaItens;
            break;
        case 'media':
            lista = listaMediaItens;
            break;
        case 'alta':
            lista = listaAltaItens;
            break;

        default:
            alert('Prioridade inválida.');
            return;
    }

    lista.appendChild(elementoNovoItem);
}

