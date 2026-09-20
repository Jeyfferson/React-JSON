import {useEffect, useState} from 'react';
import FormTarefa from './components/FormTarefa';
import ListaTarefas from './components/ListaTarefas';
import Header from './components/Header';
import Footer from './components/Footer';

import{
    buscarTarefas,
    CriarTarefa,
    atualizarStatus,
    ExcluirTarefa
} from '../services/TarefasService';

function App() {
    const [tarefas, setTarefas] = useState([]);
    const [erro, setErro] = useState("");
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        carregarTarefas();
    }, []);

}




return (
  <>
    <Header />

    <main className="container">

      <section className="apresentacao">
        <h1>Gerenciador de Tarefas</h1>

        <p>
          React consumindo uma API simulada com JSON Server
        </p>
      </section>

      <FormTarefa onAdicionar={adicionarTarefa} />

      {erro && (
        <p className="erro">
          {erro}
        </p>
      )}

      {carregando ? (
        <p>Carregando...</p>
      ) : (
        <ListaTarefas
          tarefas={tarefas}
          onExcluir={removerTarefa}
          onAlterar={alterarTarefa}
        />
      )}

    </main>

    <Footer />
  </>
);
}

export default App;