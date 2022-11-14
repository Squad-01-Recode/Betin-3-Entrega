import FormCadastroUser  from "../components/FormCadastroUser"
import Footer from "../components/Footer"
import Header from "../components/Header"


export const Cadastro = () => {
   return (

      <div className="App">
         <Header />
         <div>
            <FormCadastroUser />
         </div>
         <Footer />
      </div>

   )
}