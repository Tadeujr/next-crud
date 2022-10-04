import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";

export default function Home() {
  // const clientes = [
  //   new Cliente("Ana", 34, "1"),
  //   new Cliente("Carlos", 45, "2"),
  //   new Cliente("Bia", 23, "3"),
  //   new Cliente("Pedro", 54, "4"),
  // ];
  const {
    cliente,
    salvarCliente,
    clientes,
    selecionarCliente,
    excluirCliente,
    novoCliente,
    tabelaVisivel,
    exibirTabela,
  } = useClientes();

  return (
    <div
      className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}
    >
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao onClick={novoCliente} cor="gray" className="mb-4">
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            ></Tabela>
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => exibirTabela}
          />
        )}
      </Layout>
    </div>
  );
}
