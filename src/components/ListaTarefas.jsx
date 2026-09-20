import { useState } from 'react';

function ListaTarefas({ tarefas = [], onExcluir, onAlterar }) {
    const [tarefaParaExcluir, setTarefaParaExcluir] = useState(null);

    if (!Array.isArray(tarefas) || tarefas.length === 0) {
        return (
            <p className="nenhuma-tarefa">
                Nenhuma tarefa cadastrada
            </p>
        );
    }

    const confirmarExclusao = () => {
        if (tarefaParaExcluir) {
            onExcluir(tarefaParaExcluir.id);
            setTarefaParaExcluir(null);
        }
    };

    return (
        <section className="lista">
            {tarefas.map((tarefa) => (
                <article className="tarefa" key={tarefa.id}>
                    <div>
                        <h2 className={tarefa.concluida ? "concluida" : ""}>
                            {tarefa.titulo}
                        </h2>

                        <span>
                            {tarefa.concluida ? "Concluída" : "Pendente"}
                        </span>
                    </div>

                    <div className="acoes">
                        <button 
                            className="botao-excluir" 
                            type="button" 
                            onClick={() => setTarefaParaExcluir(tarefa)}
                        >
                            Excluir
                        </button>
                        <button 
                            type="button" 
                            onClick={() => onAlterar(tarefa)}
                        >
                            {tarefa.concluida ? "Reabrir" : "Concluir"}
                        </button> 
                        
                    </div>
                </article>
            ))}

            {/* MODAL DE CONFIRMAÇÃO */}
            {tarefaParaExcluir && (
                <div className="modal-overlay">
                    <div className="modal-caixa">
                        <h3>Confirmar Exclusão</h3>
                        <p>Tem certeza que deseja excluir a tarefa <strong>"{tarefaParaExcluir.titulo}"</strong>?</p>
                        
                        <div className="modal-acoes">
                            <button 
                                className="btn-cancelar" 
                                onClick={() => setTarefaParaExcluir(null)}
                            >
                                Cancelar
                            </button>
                            <button 
                                className="btn-confirmar" 
                                onClick={confirmarExclusao}
                            >
                                Excluir
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default ListaTarefas;