import './SecondSection.css'

export const SecondSection = () => {
   return (
      <section className="container-fluid">
         <div className="second-content container-fluid">
            <div className="content-main">
               <h2>Missão</h2>
               <p>Formar cidadãos alfabetizados por meio da tecnologia, desta forma reduzindo a taxa de analfabetismo!</p>
            </div>
            <div className="content-main">
               <h2>Visão</h2>
               <p>Ser referência nacional na área de educação!</p>
            </div>
            <div className="content-main">
               <h2>Valores</h2>
               <p>
                  Ética, responsabilidade e empatia!
               </p>
            </div>
         </div>
      </section>
   )
}