import { Link } from "react-router-dom";
import Header from "../components/Header";
import EditDestino from "../components/EditDestino";
import Footer from "../components/Footer";


export default function DestinosEdicao() {
   return (
      <div>
         <Header />

         <EditDestino />

         <Link as={Link} to="/Atividades">
            <button
               className="btn btn-outline-info mt-4 col-sm-4">
               Voltar
            </button>
         </Link>
         
         <Footer/>
      </div>
   )
}
