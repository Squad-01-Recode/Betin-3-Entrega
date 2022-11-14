import React, { useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export default function EditAtividade() {
  const [atividades, setAtividade] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();

  const [tituloAtv, setTituloAtv] = useState("");
  const [descriAtv, setDescriAtv] = useState("");
  const [conteudoAtv, setConteudoAtv] = useState("");

  const editar = async (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/editarAtividade/${atividades.id_atividade}`, {
        tituloAtv: tituloAtv,
        descriAtv: descriAtv,
        conteudoAtv: conteudoAtv

      })
      .then((result) => {
        console.log("funcionário atualizado:" + result.data);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const listarAtividades = async () => {
    try {
      await axios.get(`http://localhost:8080/editarAtividade/${atividades.id_atividade}`).then((response) => {
        setAtividade(response.data)
      })
    } catch (erro) {
      alert(erro.message);
    }
  };


  useEffect(() => {
    listarAtividades();
  }, [])

  return (
    <div className="container edicao-destino">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"> Atividade</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="tituloAtv" className="form-label">
                Titulo Atividade
              </label>
              <input
                type="text"
                className="form-control"
                id="tituloAtv"
                aria-describedby="tituloAtvHelp"
                placeholder="Insira um novo nome da atividade"
                value={tituloAtv}
                onChange={(e) => setTituloAtv(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="descrição" className="form-label">
                Descrição
              </label>
              <input
                type="text"
                className="form-control"
                id="descrição"
                placeholder="Insira uma nova descrição da atividade"
                value={descriAtv}
                onChange={(e) => setDescriAtv(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="conteudo" className="form-label">
                Conteudo
              </label>
              <input
                type="text"
                className="form-control"
                id="conteudo"
                aria-describedby="conteudoHelp"
                placeholder="Insira um novo conteudo"
                value={conteudoAtv}
                onChange={(e) => setConteudoAtv(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-outline-success"
              onClick={editar}
            >
              Salvar
            </button>
            <Link to="/" className="btn btn-outline-danger mx-2">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}