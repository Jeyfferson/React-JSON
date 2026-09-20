function ListaTarefas({ tarefas = [], onExcluir, onAlterar }) {

    if (!Array.isArray(tarefas) || tarefas.length === 0) {
        return (
            <p className="nenhuma-tarefa">
                Nenhuma tarefa cadastrada
            </p>
        );
    }

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
                            type="button" 
                            onClick={() => onAlterar(tarefa)}
                        >
                            {tarefa.concluida ? "Reabrir" : "Concluir"}
                        </button> 

                        <button 
                            className="botao-excluir" 
                            type="button" 
                            onClick={() => onExcluir(tarefa.id)}
                        >
                            Excluir
                        </button>

                    </div>

                </article>
            ))}
        </section>
    );
}

export default ListaTarefas;