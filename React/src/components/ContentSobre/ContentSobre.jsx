import React from "react";
import "../../App.css";
import './teste.css'

import sobreImg from "../../img/logo-betin.svg";
import teste from "../../img/undraw_mobile_posts_re_bpuw.svg";

export function ContentSobre() {
   return (
      <section className="content-sobre ">
         <div className="content">
            <div className="header-img container">
               <img src={sobreImg} alt="" />
            </div>
            <div className=" text-uppercase fw-bold">
               <h2>Sobre o Projeto Betin</h2>
            </div>

            <p className="my-3 text-xl-center">Tendo em base o PNE seus retrocessos e a situação atual da educação no Brasil, decidimos lançar o projeto
               chamado BETIN um site interativo, dinâmico, intuitivo de fácil acesso capaz de engajar facilmente até mesmo as pessoas que não possuem afinidade
               com a tecnologia. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse suscipit atque dolorem molestiae expedita sapiente ipsa pariatur
               vero, fuga quisquam eaque labore debitis commodi hic sunt repellendus maxime sit. Ab debitis fugit eum delectus ad! Incidunt at illo ducimus eaque!
            </p>
            <p className="my-3 text-xl-center">Acesse o site  realize atividades e desenvolva um aprendizado de forma dinamica e facil, diversas atividades estao
               disponiveis e para um constante aprendizado!
            </p>
         </div >

         <div className="sobre-app" >
            <div className="container">
               <div className="conteudo-sobre-app">
                  <h2 className="titulo-sobre-app">Dinamismo e Interatividade</h2>
                  <p className="txt-sobre-app">
                     BETIN um site interativo, dinâmico, intuitivo de fácil acesso capaz de engajar facilmente até
                     mesmo as pessoas que não possuem afinidade com a tecnologia, um site que  qualquer pessoa consiga acessar sem
                     dificuldades, até mesmo as não tenham afinidades tecnológicas.
                  </p>
               </div>
               <img src={teste} alt="" srcSet="" />
            </div>
         </div>
      </section >
   );
}
