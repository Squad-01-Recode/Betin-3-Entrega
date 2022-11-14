import { Link } from "react-router-dom";
import Header from "../components/Header";
import TabelaAtv from "../components/TabelaAtv";
import Footer from "../components/Footer";


export default function GerenciadorAtv() {
   return (
      <div>
         <Header />
         <TabelaAtv />

         <Link as={Link} to="/Atividades">
            <button
               className="btn btn-outline-info mt-4 col-sm-4">
               Voltar
            </button>
         </Link>
         <Footer />
      </div>
   )
}
