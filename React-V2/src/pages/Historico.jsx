import React from "react";

import Header from '../components/Header';
import Footer from '../components/Footer';
import CardHistorico from "../components/CardHistorico";
import Subtitle from "../components/Titulos/Subtitle";
import { Title } from "../components/Titulos/Title";


export default function Historico() {
   return (
      <div className="App">

         <Header />

         <Title
            title="Historico de atividades"
         />

         <Subtitle
            subtitle="Suas atividades irão aparecer aqui"
         />

         <div className="container">
            <CardHistorico
               titulo="Alfabeto"
               subTitulo="A-B-C-D-E..."
               conteudo="Durante o processo de alfabetização, é fundamental que tenha contato com todas as letras."
            />
            <CardHistorico
               titulo="Numeros"
               subTitulo="Unidades e dezenas"
               conteudo="É fundamental que tenha contato com todas os numeros e essa atividade que estimula a interação com os números."
            />
            <CardHistorico
               titulo="Silabas"
               subTitulo="Tônicas e átonas"
               conteudo="Fonemas ou grupos de fonemas pronunciados por uma única emissão de voz."
            />

         </div>

         <Footer />
      </div>
   )

}