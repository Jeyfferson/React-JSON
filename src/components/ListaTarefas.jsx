// Substitua o link abaixo pela SUA URL real do Render
const API_URL = "https://backend-react-vu3t.onrender.com";

export const buscarTarefas = async () => {
    const resposta = await fetch(API_URL);
    if (!resposta.ok) throw new Error("Erro ao buscar tarefas");
    return await resposta.json();
};

export const criarTarefa = async (novaTarefa) => {
    const resposta = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novaTarefa),
    });
    if (!resposta.ok) throw new Error("Erro ao criar tarefa");
    return await resposta.json();
};

export const atualizarStatus = async (id, dados) => {
    const resposta = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
    });
    if (!resposta.ok) throw new Error("Erro ao atualizar tarefa");
    return await resposta.json();
};

export const excluirTarefa = async (id) => {
    const resposta = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });
    if (!resposta.ok) throw new Error("Erro ao excluir tarefa");
    return await resposta.json();
};