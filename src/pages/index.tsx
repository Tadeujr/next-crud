import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from '../core/Cliente';
import styles from "../styles/Home.module.css";


const clientes  = [
  new Cliente('Ana',34,'1'),
  new Cliente('Carlos',45,'2'),
  new Cliente('Bia',23,'3'),
  new Cliente('Pedro',54,'4')
]

function clienteSelecionado(cliente:Cliente){
  console.log(cliente.getNome);
  
}

function clienteExcluido(cliente:Cliente){
  console.log("Excluir: " + cliente.getNome);
  
}

export default function Home() {
  return (
    <div
      className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}
    >
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}
        clienteSelecionado={clienteSelecionado}
        clienteExcluido={clienteExcluido}></Tabela>
      </Layout>
    </div>
  );
}
