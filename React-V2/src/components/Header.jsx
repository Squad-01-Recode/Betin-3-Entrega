import React from "react";
import { Link } from 'react-router-dom';

import logoBetin from "../img/logo-betin.svg";

import '../App.css'


class Header extends React.Component {
   render() {
      return (
         <div>
            <nav className=" cabecalho fixed-top navbar navbar-expand-lg navbar-light ">
               <Link className="navbar-brand" to='/'>
                  <img src={logoBetin} alt="logo dass viagens" className="logo" />
               </Link>

               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Alterna navegação">
                  <span className="navbar-toggler-icon"></span>
               </button>

               <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                  <ul className="navbar-nav">
                     <li className="nav-item">
                        <Link className="nav-link" to='/'>Inicio</Link>
                     </li>
                     <li>
                        <Link className="nav-link" to='/atividades'>Atividades</Link>
                     </li>
                     <li>
                     <Link className="nav-link" to='/historico'>Historico</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to='/sobre'>Sobre</Link>
                     </li>
                  </ul>
               </div>

               <div className="collapse navbar-collapse justify-content-end mobile-login" id="navbarNavAltMarkup">
                  <Link className="btn btn-light btn-teste" to="/login">
                     {/* <img src={logoAccount} alt="..." srcSet="" /> */}
                     Login ou Cadastre-se
                  </Link>
               </div>

            </nav>
         </div>

      )
   }
}

export default Header;