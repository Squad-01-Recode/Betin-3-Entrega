import React from "react";

import carouselImg from "../img/hero-image (1).jpg";
import carouselImg2 from "../img/hero-image (3).jpg";

export default function Carousel() {
   return (
      <section className="carrosel">
         <article id="carouselExampleIndicators" className="carousel slide " data-interval="4000" data-ride="carousel">

            <ol className="carousel-indicators">
               <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
               <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            </ol>

            <div className="carousel-inner">
               <div className="carousel-item active">
                  <figure>
                     <img className="d-block w-100 img-carrosel" src={carouselImg} alt="Primeiro Slide" />
                  </figure>
               </div>
               <div className="carousel-item">
                  <figure>
                     <img className="d-block w-100 img-carrosel" src={carouselImg2} alt="Segundo Slide" />
                  </figure>
               </div>
            </div>

            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>

            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
               <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
         </article>
      </section>
   )
}