import "./Titlepagecadastrar.css";
import { Link } from "react-router-dom";

export const Titlepagecadastrar = () => {
  return (
    <div className="title-cadastro">
      <h2>Cadastro</h2>
      <p>Vamos começar seu cadastro</p>
      <p style={{ color: "#202024" }}>
        Já possui cadastro?{" "}
        <Link style={{ color: "#e1e1e6" }} to="/login">
          {" "}
          Faça login
        </Link>
      </p>

      <div className="subtitle-cadastro">
        <p>Preencha os campos abaixo com seus dados e cadastre-se</p>
      </div>
    </div>
  );
};
