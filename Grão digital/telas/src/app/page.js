'use client';

import '../styles/page.css';

export default function Home() {
  return (
    <main>
      <div>
        A inteligência que<br></br> cultiva o amanhã
      </div>

      <div className="botoes-page">
        <button
          className="botao botao-cadastrar"
          onClick={() => (window.location.href = '/cadastro')}
        >
          Cadastrar
        </button>
        <button className="botao  botao-entrar">Entrar</button>
      </div>

      <img className="fundo-folha" src="/images/fundo-folha.png"></img>
    </main>
  );
}
