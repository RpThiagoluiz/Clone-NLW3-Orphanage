import React from "react";
import { Link } from "react-router-dom";

//icon
import { FiArrowRight } from "react-icons/fi";
//Img
import logoImg from "../assets/img/Logo.svg";
//styles
import "../assets/styles/pages/landing.css";

const Landing = () => (
  <div id="page-landing">
    <div className="content-wrapper">
      <img src={logoImg} alt="Happy" />

      <main>
        <h1>Leve felicidade para o mundo</h1>
        <p>Visite orfanatos e mude o dia de muitras crianças.</p>
      </main>

      <div className="location">
        <strong>Goiânia</strong>
        <span>GO</span>
      </div>

      <Link to="/app" className="enter-app">
        <FiArrowRight size={26} color="rgba(0,0,0, 0.6)" />
      </Link>
    </div>
  </div>
);

export default Landing;
