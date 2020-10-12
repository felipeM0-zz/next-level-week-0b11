import React from "react";

import "./styles/global.css";
import "./styles/pages/landing.css";

import logoImg from "./images/logo.svg";
import { FiArrowRight } from "react-icons/fi";

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>São Luís</strong>
          <span>Maranhão</span>
        </div>

        <a href="https://google.com.br" className="enter-app">
          <FiArrowRight size={26} color="#8d734b" />
        </a>
      </div>
    </div>
  );
}

export default App;
