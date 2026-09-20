const URL_API = 'http://localhost:3000/tarefas';

export async function buscarTarefas() {

    const response = await fetch(URL_API);
    
    if(!response.ok) {
        throw new Error('Erro ao buscar tarefas');  
    };

    return await response.json();

};

export async function criarTarefa(tarefa) {

    const response = await fetch(URL_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tarefa)
    });

    if(!response.ok) {
        throw new Error('Erro ao criar tarefa');
    };

    return await response.json();
};


export async function excluirTarefa(id) {

    const response = await fetch(`${URL_API}/${id}`, {
        method: 'DELETE'
    });

    if(!response.ok) {
        throw new Error('Erro ao excluir tarefa');
    };
};

export async function atualizarStatus(id, concluida) {

    const response = await fetch(`${URL_API}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            concluida: concluida 
        })
    });

    if(!response.ok) {
        throw new Error('Erro ao atualizar status da tarefa');
    }

    return await response.json();
}