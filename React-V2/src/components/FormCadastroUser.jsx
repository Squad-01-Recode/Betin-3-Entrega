import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import './ContentCadastro/Cadastrocontent.css'

export default function AddUsuario() {
   const navigate = useNavigate();

   const [nome, setNome] = useState("");
   const [email, setEmail] = useState("");
   const [senha, setSenha] = useState("");

   const salvar = async (e) => {
      e.preventDefault();
      console.log(nome, senha, email);
      await axios
         .post("http://localhost:8080/betin/usuarios/cadastro", {
            nome: nome,
            senha: senha,
            email: email,
         })
         .then((result) => {
            alert("Conta criada com sucesso");
            navigate("/");
         })
         .catch((erro) => {
            console.log(erro);
         });
   };


   return (
      <div className="container conteudo-cadastro">
         <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
               <h2 className="text-center m-4">Cadastre-se</h2>
               <form>
                  <div className="mb-3">
                     <label htmlFor="InputNome" className="form-label">
                        Nome
                     </label>
                     <input
                        type="text"
                        className="form-control"
                        id="InputNome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="InputEmail" className="form-label">
                        Email
                     </label>
                     <input
                        type="email"
                        className="form-control"
                        id="InputEmail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                     <div id="senhaHelp" className="form-text">
                        Coloque seu melhor email
                     </div>
                  </div>
                  <div className="mb-3">
                     <label htmlFor="InputSenha" className="form-label">
                        Senha
                     </label>
                     <input
                        type="password"
                        className="form-control"
                        id="InputSenha"
                        aria-describedby="senhaHelp"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                     />

                  </div>
                  <button
                     type="submit"
                     className="btn btn-outline-success"
                     onClick={salvar}
                  >
                     Cadastrar
                  </button>
                  <Link to="/" type="submit" className="btn btn-outline-danger mx-2">
                     Limpar
                  </Link>
               </form>
            </div>
         </div>
      </div>
   );
}