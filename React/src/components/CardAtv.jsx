import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function CardAtv({ foto }) {

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


   CardAtv.propTypes = {
      atividadeNome: PropTypes.string.isRequired,
      foto: PropTypes.string
   }


   CardAtv.defaultProps = {
      atividadeNome: "Nome da Atividade"
   }
   return (
      <div className="container d-flex flex-wrap container-card justify-content-around">
         {atividades.map((atividades, key) => (
            <div className="card card-atv borda-card col-12 col-md-12 col-lg-12 col-xl-4 p-0 m-4">
               <img src={foto} className="card-img" alt={atividades.titulo_atividade} />
               <div className="card-body">
                  <h5 className="card-title">{atividades.info_atividade}</h5>
                  <p className="card-text">{atividades.info_conteudo}</p>
                  <button type="button" className="btn btn-primary w-100" data-toggle="modal" data-target="#exampleModal">
                     Acessar
                  </button>
               </div>
            </div>
         ))
         }
      </div>
   )
}

export default CardAtv;