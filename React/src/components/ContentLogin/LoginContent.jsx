import React, { useState } from "react";
import axios from "axios";

import logoimg from "../../img/betin-cadastro.png";

import "./LoginContent.css";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Title } from "../Titulos/Title";



export const LoginContent = () => {
   const navigate = useNavigate();


   const [email, setEmail] = useState("");
   const [senha, setSenha] = useState("");

   const validar = async (e) => {
      e.preventDefault();
      console.log(senha, email);
      await axios
         .post("http://localhost:8080/betin/usuarios/cadastro/autenticar", {
            senha: senha,
            email: email,
         })
         .then((result) => {
            alert("Login realizado com sucesso");
            navigate("/");
         })
         .catch((erro) => {
            console.log(erro);
            alert("Senha ou login invalido");
         });

   }

   return (
      <div className="container container-form">
         <div className="row">
            <div className="img-content col-md-6">
               <img src={logoimg} alt="logo de login betin" />
            </div>

            <div className="form-content col-md-6">
               <Title
                  title="Já é cadastrado?"
               />
               <form className="login-content">

                  <div className="input-login">
                     <label htmlFor="email">Email</label>
                     <input
                        type="text"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                  </div>

                  <div className="input-login">
                     <label htmlFor="password">Senha</label>
                     <input
                        type="password"
                        name="password"
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                     />
                  </div>

                  <div className="btn-form">
                     <button
                        className="btn-login"
                        onClick={validar}
                     >
                        Entrar</button>

                     <button
                        className="btn-login"
                        onClick={() => {
                           navigate("/Cadastro");
                        }}
                     >
                        Cadastre-se
                     </button>
                  </div>
               </form>
               <div className="ancoras">
                  <Link style={{ color: "#808080" }} to="Recuperacao">
                     Esqueceu usuário ou senha?
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};
