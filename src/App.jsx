import { useEffect, useState } from 'react';
import FormTarefa from './components/FormTarefa';
import ListaTarefas from './components/ListaTarefas';
import Header from './components/Header';
import Footer from './components/Footer';

import {
  buscarTarefas,
  criarTarefa,
  atualizarStatus,
  excluirTarefa
} from './services/tarefasService';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    carregarTarefas();
  }, []);

  // CARREGAR TAREFAS
  async function carregarTarefas() {
    try {
      setCarregando(true);
      setErro("");

      const dados = await buscarTarefas();
      setTarefas(dados);
    } catch (error) {
      console.log(error);
      setErro('Não foi possível carregar tarefas. Verifique o JSON SERVER.');
    } finally {
      setCarregando(false);
    }
  }

  // ADICIONAR TAREFA
  async function adicionarTarefa(titulo) {
    try {
      setErro("");

      const novaTarefa = await criarTarefa({
        titulo: titulo,
        concluida: false
      });

      setTarefas((listaAtual) => [...listaAtual, novaTarefa]);
    } catch (error) {
      console.log(error);
      setErro('Não foi possível criar tarefa.');
    }
  }

  // REMOVER TAREFA
  async function removerTarefa(id) {
    try {
      setErro('');
      await excluirTarefa(id);

      setTarefas((listaAtual) =>
        listaAtual.filter((tarefa) => tarefa.id !== id)
      );
    } catch (error) {
      console.log(error);
      setErro('Não foi possível excluir tarefa.');
    }
  }

  // ALTERAR TAREFA
  async function alterarTarefa(tarefa) {
    try {
      const tarefaAtualizada = await atualizarStatus(
        tarefa.id,
        !tarefa.concluida
      );

      setTarefas((listaAtual) =>
        listaAtual.map((item) =>
          item.id === tarefa.id ? tarefaAtualizada : item
        )
      );
    } catch (error) {
      console.log(error);
      setErro('Não foi possível alterar tarefa.');
    }
  }

  return (
    <>
      <Header />

      <main className="container">
        <section className="apresentacao">
          <h1>Gerenciador de Tarefas</h1>
          <p>React consumindo uma API simulada com JSON Server</p>
        </section>

        <FormTarefa onAdicionar={adicionarTarefa} />

        {erro && <p className="erro">{erro}</p>}

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