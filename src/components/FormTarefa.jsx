import {useState} from 'react';

function FormTarefa({onAdicionar}) {

    const [titulo, setTitulo] = useState("");

    function enviar(e) {
        e.preventDefault();
        const tituloTrim = titulo.trim();

        if (!tituloTrim) {
            return;
        }

        onAdicionar(tituloTrim);
        setTitulo("");

    }

    return (
        <form onSubmit={enviar} className="formulario">
            <input
                type="text"
                placeholder="Digite o título da tarefa"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
            />
            <button type="submit">Adicionar</button>
        </form>
    )

};



export default FormTarefa;