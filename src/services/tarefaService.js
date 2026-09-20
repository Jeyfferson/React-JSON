const URL_API = 'http://localhost:3000/tarefas';

export async function buscarTarefas() {

    const response = await fetch(URL_API);
    
    if(!response.ok) {
        throw new Error('Erro ao buscar tarefas');  
    }

    return await response.json();

}