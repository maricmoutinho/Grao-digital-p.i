'use client';

import '../../styles/cadastro.css';

export default function Home() {
  return (
    <main>
      <img className="logo-header" src="/images/logo.png" alt="Logo"></img>
      <p className="text-center text-neutral-300 text-2xl font-normal font-['Arimo'] leading-9">
        Selecione um perfil para registrar no sistema
      </p>

      <div className="cards-container">
        <div className="card card-blue">
          <img src="/images/icone-administrativo.png" alt="" />
          <h3>Administrativo</h3>
          <h4>Gestor do IPA</h4>
          <p>Administrador do sistema para gestão estratégica do programa</p>
        </div>
        <div className="card card-green">
          <img src="/images/icone-tecnico.png" alt="" />
          <h3>TÉCNICO</h3>
          <h4>Extensionista Rural</h4>
          <p>Profissional técnico de campo do programa</p>
        </div>
        <div className="card card-orange">
          <img src="/images/icone-associacao.png" alt="" />
          <h3>ASSOCIAÇÃO</h3>
          <h4>Cooperativa Parceira</h4>
          <p>Entidade parceira gerenciando a distribuição</p>
        </div>
      </div>

      <div
        className="text-center text-white text-2xl font-normal font-['Arial'] underline leading-9"
        onClick={() => (window.location.href = '/')}
        style={{ cursor: 'pointer' }}
      >
        VOLTAR
      </div>
    </main>
  );
}
