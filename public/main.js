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


const prioridades = {};
function addTask(nomeTarefa, data, prioridade) {
    nomeTarefa = nomeTarefa.trim();
    if (nomeTarefa === "") {
        alert("Por favor,informe a tarefa.");
        return;
    }
    if (!prioridades[prioridade]) {
        prioridades[prioridade] = [];
          }
    prioridades[prioridade].push({ nomeTarefa, data });
       let listaHTML = '';
    for (const [prioridade, tarefas] of Object.entries(prioridades)) {
        const grupoHTML = tarefas.map(({ nomeTarefa, data }) => `
          <li><p> ${nomeTarefa}</p><p>${data}</p></li>`).join('');
        listaHTML += grupoHTML;
    }
    document.getElementById('taskList').innerHTML = listaHTML;
}
const filtro = ['alta', 'média', 'baixa']
const sorted = filtro.sort((a, b) => {
    let index1 = filtro.indexOf(a.split('@')[1])
    let index2 = filtro.indexOf(b.split('@')[1])
    return index1 == -1 ? 1 : index2 == -1 ? -1 : index1 - index2;
})
function funcaoSubmeter() {
    let batata = meuCampo.value.trim();
    let pato = dataCampo.value;
    let manga = prioridadeCampo.value;

    addTask(batata, pato, manga);
}
function deleteTask(deleteBtn) {
    var taskList = document.getElementById("taskList");
    var taskItem = deleteBtn.parentNode;
    taskList.removeChild(taskItem);
}


