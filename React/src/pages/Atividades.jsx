import CardAtv from '../components/CardAtv';
import Header from '../components/Header';
import CampoPesquisaAtv from '../components/CampoPesquisaAtv';
import FormCadastroAtv from '../components/FormCadastroAtv';
import Footer from "../components/Footer"

import atividadeImg from '../img/not.jpg';
import { Title } from '../components/Titulos/Title';
import Subtitle from '../components/Titulos/Subtitle';

export default function Atividades() {
   return (
      <div>
         <Header />

         <Title
            title="Atividades"
         />

         <Subtitle
            subtitle="Escolha sua atividade e começe os estudos!"
         />

         <CampoPesquisaAtv />
         
         <div className="d-flex container-fluid">
            <div className="row mx-auto">
               <CardAtv atividadeNome="Silabas" foto={atividadeImg} />
            </div>
         </div>
         <FormCadastroAtv />

         <Footer/>
      </div>
   )
}
