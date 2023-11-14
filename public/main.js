let meuCampo;
let dataCampo;
let prioridadeCampo;
let taskList;
const alta = [];
const media = [];
const baixa = [];


window.addEventListener('DOMContentLoaded', function () {
    meuCampo = document.getElementById('meuCampo');
    dataCampo = document.getElementById('dataCampo');
    prioridadeCampo = document.getElementById('prioridadeCampo');
    taskList = this.document.getElementById('taskList');
});




    // alert(`tarefaValue = ${nomeTarefa}\ntarefaData = ${data}\ntarefaPrioridade = ${prioridade}`);


    // `    taskList.innerHTML +=

    // <li><p>${prioridade} - ${nomeTarefa}</p><p>${data}</p></li>
    // `


       addTask(meuCampo, dataCampo, prioridadeCampo);
        
        function addTask(meuCampo, dataCampo, prioridadeCampo){
            meuCampo = meuCampo.trim();
            if (meuCampo === "") {
                alert("Por favor,informe a tarefa.");
                return;
        
            }

        switch (prioridadeCampo.value) {
            case 'alta':
                alta.push(`<li><p>${nomeTarefa}</p><p>${data}</p></li>`);
                break;
            case 'média':
                media.push(`<li><p>${nomeTarefa}</p><p>${data}</p></li>`);
                break;
            case 'baixa':
                baixa.push(`<li><p>${nomeTarefa}</p><p>${data}</p></li>`);
                break;
            default:
                console.error(`Prioridade desconhecida: ${prioridade}`);
                break;
        }
        updatetaskList();
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
    var taskItem = deleteBtn.parentNode;
    if (alta.includes(taskItem.outerHTML)) {
        alta.splice(alta.indexOf(taskItem.outerHTML), 1);
    } else if (media.includes(taskItem.outerHTML)) {
        media.splice(media.indexOf(taskItem.outerHTML), 1);
    } else if (baixa.includes(taskItem.outerHTML)) {
        baixa.splice(baixa.indexOf(taskItem.outerHTML), 1);
    }
    updatetaskList();
}