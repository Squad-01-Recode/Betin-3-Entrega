import React from "react";

export default class Footer extends React.Component {
   render() {
      return (
         <footer className="p-3 mt-5">
            <p className="text-dark m-0 text-center">&copy; Betin 2022</p>
            <ul className="navbar-nav text-center d-flex flex-row justify-content-center">
               <li><a className="nav-item nav-link mr-2" href="#"><i className="fa-brands fa-facebook-square"></i></a></li>
               <li><a className="nav-item nav-link mr-2" href="#"><i className="fa-brands fa-instagram"></i></a></li>
               <li><a className="nav-item nav-link mr-2" href="#"><i className="fa-brands fa-twitter-square"></i></a></li>
            </ul>
         </footer>
      )
   }
}