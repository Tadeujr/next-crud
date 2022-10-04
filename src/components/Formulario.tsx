import Entrada from './Entrada';
import Cliente from '../core/Cliente';
import { useState } from 'react';
import Botao from './Botao';

interface FormularioProps{
    cliente: Cliente;
    clienteMudou?: (cliente:Cliente)=>void;
    cancelado?: ()=>void;
}

export default function Formulario(props: FormularioProps){
   const id = props.cliente?.getId;
   const [nome, setNome] = useState(props.cliente?.getNome ?? '')
   const [idade, setIdade] = useState(props.cliente?.getIdade ?? 0)

   return (<div>
        {id ?(
            <Entrada somenteLeitura texto='Código' valor={id} 
            className="mb-5"
            />
        ): false}
        <Entrada texto='Nome' valor={nome} valorMudou={setNome} className="mb-5"></Entrada>
        <Entrada texto='Idade' tipo="number" valor={idade} valorMudou={setIdade} ></Entrada>
            <div className=' flex justify-end mt-7'>
                <Botao onClick={()=>props.clienteMudou?.(new Cliente(nome,+idade,id))} cor='blue' className='mr-2'>{id ? 'Alterar' : 'Salvar'}</Botao>
                <Botao onClick={props.cancelado}>Cancelar</Botao>
            </div>
    </div>)
}