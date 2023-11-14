const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

// Configuração do SQLite e criação da tabela 'tasks'
const db = new sqlite3.Database(':memory:');
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, task TEXT, dueDate TEXT, priority TEXT, completed INTEGER DEFAULT 0)");
});

// Configuração do Express
app.use(express.static('public'));
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Rota para obter todas as tarefas
app.get('/tasks', (req, res) => {
    db.all("SELECT * FROM tasks", (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Erro interno do servidor' });
        } else {
            res.json(rows);
        }
    });
});

// Rota para adicionar uma nova tarefa
app.post('/tasks', (req, res) => {
    const { task, dueDate, priority } = req.body;
    if (!task) {
        return res.status(400).json({ error: 'A tarefa não pode estar vazia.' });
    }

    db.run("INSERT INTO tasks (task, dueDate, priority) VALUES (?, ?, ?)", [task, dueDate, priority], function (err) {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Erro interno do servidor' });
        } else {
            res.json({ id: this.lastID, task: task, dueDate: dueDate, priority: priority, completed: 0 });
        }
    });
});

// Rota para marcar uma tarefa como concluída
app.post('/tasks/complete/:id', (req, res) => {
    const taskId = req.params.id;
    db.run("UPDATE tasks SET completed = 1 WHERE id = ?", [taskId], function (err) {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Erro interno do servidor' });
        } else {
            res.json({ message: 'Tarefa marcada como concluída.' });
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
