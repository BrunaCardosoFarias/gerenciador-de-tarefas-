let meuCampo;
let dataCampo;
let prioridadeCampo;
let taskList;


window.addEventListener('DOMContentLoaded', function () {
    meuCampo = document.getElementById('meuCampo');
    dataCampo = document.getElementById('dataCampo');
    prioridadeCampo = document.getElementById('prioridadeCampo');
    taskList = this.document.getElementById('taskList');
});

function soma(n1, n2) {
    return n1 + n2;
}

const resultadoSoma = soma(3, 4);

// ...

const prioridades = {};

function addTask(nomeTarefa, data, prioridade) {
    nomeTarefa = nomeTarefa.trim();
    if (nomeTarefa === "") {
        alert("Por favor,informe a tarefa.");
        return;
    }

    // alert(`tarefaValue = ${nomeTarefa}\ntarefaData = ${data}\ntarefaPrioridade = ${prioridade}`);
    if (!prioridades[prioridade]) {
        prioridades[prioridade] = [];
    }

    prioridades[prioridade].push({ nomeTarefa, data });

    let listaHTML = '';
    for (const [prioridade, tarefas] of Object.entries(prioridades)) {
        // Construa a parte da lista para cada grupo de prioridade
        const grupoHTML = tarefas.map(({ nomeTarefa, data }) => `
          <li><p>${prioridade} - ${nomeTarefa}</p><p>${data}</p></li>
        `).join('');

        // Adicione a parte da lista ao HTML final
        listaHTML += grupoHTML;
    }

    // Adicione a lista ao elemento desejado (assumindo que taskList seja o ID do elemento)
    document.getElementById('taskList').innerHTML += listaHTML;

    // taskList.innerHTML +=
    //     `
    // <li><p>${prioridade} - ${nomeTarefa}</p><p>${data}</p></li>
    // `
}

function funcaoSubmeter() {
    let batata = meuCampo.value.trim();
    let pato = dataCampo.value;
    let manga = prioridadeCampo.value;

    addTask(batata, pato, manga);
}

// document.getElementById('BotaoSubmeter').addEventListener('click', funcaoSubmeter);

// var taskItem = document.createElement("li");
// taskItem.className = "task-item";
// taskItem.innerHTML = '<strong>' + meuCampo.value + '</strong>' +
//     '<p>' + dataCampo.value + '</p>' +
//     '<p>Data: ' + prioridadeCampo.value + '</p>' +
//     '<span class="delete-btn" onclick="deleteTask(this)">X</span>';
// taskList.appendChild(taskItem);

// meuCampo.value = "";
// dataCampo.value = "";
// prioridadeCampo.value = "";

function deleteTask(deleteBtn) {
    var taskList = document.getElementById("taskList");
    var taskItem = deleteBtn.parentNode;
    taskList.removeChild(taskItem);
}
