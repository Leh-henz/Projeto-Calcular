import { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [dataAtual, definirDataAtual] = useState("");

useEffect(() => {
  const atualizarData = () => {
    const diaHoje = new Date();
    const dataFormatada =
      diaHoje.getDate().toString().padStart(2, "0") +
      "/" +
      (diaHoje.getMonth() + 1).toString().padStart(2, "0") +
      "/" +
      diaHoje.getFullYear();
    definirDataAtual(dataFormatada);
  };

  atualizarData();
  const intervaloData = setInterval(atualizarData, 86400000);

  return () => clearInterval(intervaloData);
}, []);

return (
  <header className="cabecalho">
    <div className="logo-cabecalho">Calcular</div>
    <div className="subtitulo-cabecalho">Ferramentas de aprendizagem em cálculo</div>
    <div className="barra-data">{dataAtual}</div>
  </header>

  );
}