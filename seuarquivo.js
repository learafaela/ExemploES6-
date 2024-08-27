const tarefas = [
    { id : 1, descricao: 'Estudar JavaScript', concluida: false},
    { id : 2, descricao: 'Fazer exercicios', concluida: true},
    { id : 3, descricao: 'Praticar ES6+', concluida: false},
];



const renderizarTarefas = () => {
    const listaTarefas = document.getElementById ('lista-tarefas');
    listaTarefas.innerHTML = '';

    tarefas.forEach(({id, descricao, concluida}) => {
        const li = document.createElement('li');
        li.innerHTML = `
        <input type="checkbox" ${concluida ? 'checked' : ''} id="tarefas-${id}">
        <label for="tarefa"-${id}">${descricao}</label>
        `;
        listaTarefas.appendChild(li);
       
    });

};


const adicionarTarefa = (descricao) => {
    const novaTarefa = {
        id: tarefas.length + 1,
        descricao,
        concluida: false
    }


    tarefas.push(novaTarefa);
    renderizarTarefas();
};

    renderizarTarefas();


    document.addEventListener('DOMContentLoaded', () => {
        const btnAdicionar = document.createElement('button');
        btnAdicionar.textContent = 'Adicionar Tarefa';
        document.body.appendChild(btnAdicionar);

        btnAdicionar.addEventListener('click', () => {
            const descricao = prompt('Digite a descrição da tarefa:');
            if (descricao) {
                adicionarTarefa(descricao);
            }
        });
    });