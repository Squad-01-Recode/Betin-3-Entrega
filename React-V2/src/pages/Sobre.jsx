import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { ContentSobre } from "../components/ContentSobre/ContentSobre";

export default function Sobre() {
   return (

      <div className="App">
         <Header />

         <ContentSobre />

         <Footer />
      </div>
   );
}
