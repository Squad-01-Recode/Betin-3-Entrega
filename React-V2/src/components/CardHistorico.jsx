import '../App.css'

function CardHistorico(props) {
   return (
      <section className="principal-historico container">
         <article className="secao-card">
            <div className="card card-historico w-100">
               <h5 className="card-header">{props.titulo}</h5>
               <div className="card-body">
                  <h5 className="card-title">{props.subTitulo}</h5>
                  <p className="card-text">{props.conteudo}</p>
                  <a href="#" className="btn btn-info ">Revisar</a>
               </div>
            </div>
         </article>
      </section>
   )
}

export default CardHistorico;