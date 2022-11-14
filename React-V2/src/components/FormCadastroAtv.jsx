import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function AddAtividade() {
   const navigate = useNavigate();

   const [titulo_atividade, setTitulo_atividade] = useState("");
   const [conteudo_atividade, setConteudo_atividade] = useState("");
   const [info_atividade, setInfo_atividade] = useState("");
   /*    const [imagem, setImagem] = useState(""); */

   const salvarAtividade = async (e) => {

      if (validaCampos(titulo_atividade, conteudo_atividade, info_atividade) == true) {
         e.preventDefault();
         console.log(titulo_atividade, conteudo_atividade, info_atividade);
         await axios
            .post("http://localhost:8080/betin/atividades/cadastro", {
               titulo_atividade: titulo_atividade,
               conteudo_atividade: conteudo_atividade,
               info_atividade: info_atividade,
               /* imagem: imagem, */
            })
            .then((result) => {
               alert("Atividade adicionada com sucesso.");
               navigate("/");
            })
            .catch((erro) => {
               console.log(erro);
            });
      } else {
         alert('Preencha todos os campos')
      }
   };

   function validaCampos(campo1, campo2, campo3) {
      if (campo1 != '' && campo2 != '' && campo3 != '') {
         return true
      }

   }



   return (
      <div className="container">
         <div className="row">
            <div className="col-md-8 mx-auto border rounded p-4 mt-2 shadow">
               <h2 className="text-center m-4">Insira uma nova atividade</h2>
               <form encType="multipart/form-data">

                  <div className="mb-3">
                     <label htmlFor="InputTituloAtv" className="form-label">
                        Titulo da atividade
                     </label>
                     <input
                        type="text"
                        className="form-control"
                        id="InputTituloAtv"
                        value={titulo_atividade}
                        onChange={(e) => setTitulo_atividade(e.target.value)}
                     />
                  </div>

                  <div className="mb-3">
                     <label htmlFor="InputDescricaoAtv" className="form-label">
                        Descrição
                     </label>
                     <input
                        type="text"
                        className="form-control"
                        id="InputDescricaoAtv"
                        value={info_atividade}
                        onChange={(e) => setInfo_atividade(e.target.value)}
                     />
                  </div>

                  <div className="mb-3">
                     <label htmlFor="InputConteudoAtv" className="form-label">
                        Conteudo
                     </label>
                     <textarea
                        className="form-control"
                        id="InputConteudoAtv"
                        aria-describedby="ConteudoAtividade"
                        value={conteudo_atividade}
                        onChange={(e) => setConteudo_atividade(e.target.value)}
                     />

                     <div id="ConteudoAtividade" className="form-text">
                        Descreva de melhor forma o conteudo
                     </div>

                     {/* <div className="mb-3">
                        <label htmlFor="InputFileImg" className="form-label">
                           Selecione a capa da sua atividade
                        </label>
                        <input
                           id="InputFileImg"
                           className="form-control"
                           type={"file"}
                           src=""
                           alt=""
                           accept="image/png, image/gif, image/jpeg"
                           value={imagem}
                           name="fileImg"
                           onChange={(e) => setImagem(e.target.value)}
                        />
                     </div> */}

                  </div>

                  <button
                     type="submit"
                     className="btn btn-outline-success col-sm-8"
                     onClick={salvarAtividade}
                  >
                     Inserir
                  </button>

                  <Link as={Link} to="/GerenciadorAtv">
                     <button
                        className="btn btn-outline-info mt-4 col-sm-6">
                        Gerenciador de atividades
                     </button>
                  </Link>


               </form>
            </div>
         </div >
      </div >
   );
}