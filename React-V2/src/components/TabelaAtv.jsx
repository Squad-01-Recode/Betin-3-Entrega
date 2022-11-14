import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


export default function TabelaAtv() {

   const [atividades, setAtividade] = useState([]);

   const listarAtividades = async () => {
      try {
         await axios.get("http://localhost:8080/betin/atividades/cadastro").then((response) => {
            setAtividade(response.data)
         })
      } catch (erro) {
         alert(erro.message);
      }
   };


   useEffect(() => {
      listarAtividades();
   }, [])

   const { id } = useParams();
   const deleteAtividades = async (id) => {
      try {
         await axios.delete(`http://localhost:8080/betin/atividades/cadastro/${id}`)
            .then((response) => {
               alert('Atividade ecluida com sucesso!')
               listarAtividades();
            })
      } catch (erro) {
         alert(erro.message)
      }
   }


   return (
      <div className="container tabela-atv">
         <div className="py-4">
            <table className="table table-striped border shadow">
               <thead>
                  <tr>
                     <th scope="col">#</th>
                     <th scope="col">Nome da atividade</th>
                     <th scope="col">Descrição atividade</th>
                     <th scope="col">Conteudo da atividade</th>
                  </tr>
               </thead>
               <tbody>
                  {atividades.map((atividades, key) => (
                     <tr>
                        <th scope="row" key={key}>{key + 1}</th>
                        <td>{atividades.titulo_atividade}</td>
                        <td>{atividades.info_atividade}</td>
                        <td>{atividades.conteudo_Atividade}...</td>
                        <td>
                           <Link to={`/ViewUsuario/${atividades.id_atividade}`} className="btn btn-outline-success mx-2">
                              Visualizar
                           </Link>
                           <Link to={`/editarDestino/`} className="btn btn-warning mx-2">
                              Editar
                           </Link>
                           <button className="btn btn-danger mx-2" onClick={() => deleteAtividades(atividades.id_atividade)}>
                              Excluir
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   )
}
