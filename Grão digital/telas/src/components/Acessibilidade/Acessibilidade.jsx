'use client';

import { useState } from 'react';

export default function Acessibilidade() {
  const [isOpen, setIsOpen] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [fontScale, setFontScale] = useState(1);
  const [filters, setFilters] = useState({
    grayscale: false,
    contrast: false,
    invert: false,
  });

  const increaseText = () => {
    const newScale = +(fontScale * 1.1).toFixed(2);
    setFontScale(newScale);
    document.body.style.zoom = String(newScale);
  };

  const decreaseText = () => {
    let newScale = +(fontScale / 1.1).toFixed(2);
    if (newScale < 0.5) newScale = 0.5;
    setFontScale(newScale);
    document.body.style.zoom = String(newScale);
  };

  const toggleFilter = (filterName) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));

    if (filterName === 'grayscale') {
      document.body.classList.toggle('access-grayscale');
    } else if (filterName === 'contrast') {
      document.body.classList.toggle('access-high-contrast');
    } else if (filterName === 'invert') {
      document.body.classList.toggle('access-invert');
    }
  };

  const resetAccess = () => {
    setFontScale(1);
    setFilters({ grayscale: false, contrast: false, invert: false });
    document.body.style.zoom = '';
    document.body.classList.remove(
      'access-grayscale',
      'access-high-contrast',
      'access-invert'
    );
  };

  const toggleTextToSpeech = () => {
    if (isReading) {
      window.speechSynthesis?.cancel();
      setIsReading(false);
    } else {
      const text = document.body.innerText;
      if (text) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'pt-BR';
        utterance.onend = () => setIsReading(false);
        utterance.onerror = () => setIsReading(false);
        window.speechSynthesis?.speak(utterance);
        setIsReading(true);
      }
    }
  };

  const placeholderStyle = {
    width: '24px',
    height: '24px',
    backgroundColor: '#ccc',
    borderRadius: '4px',
    display: 'inline-block',
  };

  return (
    <>
      <style>{`
        .access-high-contrast { background: #000 !important; color: #fff !important; }
        .access-invert { filter: invert(100%) hue-rotate(180deg) !important; }
        .access-grayscale { filter: grayscale(100%) !important; }
      `}</style>

      <div
        style={{
          position: 'fixed',
          right: '20px',
          top: '100px',
          display: 'flex',
          flexDirection: 'column',
          gap: '130px',
          zIndex: 1000,
        }}
      >
        <button
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '8px',
            backgroundColor: '#1A4B53',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px',
          }}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          title="Acessibilidade"
        >
          <img
            src="/images/acessibilidade/logo-acessibilidade.png"
            alt="Acessibilidade"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </button>

        <button
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '8px',
            backgroundColor: '#4CAF50',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px',
            overflow: 'hidden',
          }}
          onClick={toggleTextToSpeech}
          title={isReading ? 'Parar leitura' : 'Ler página'}
        >
          <img
            src="/images/acessibilidade/logo-voz.png"
            alt="Voz"
            style={{
              maxWidth: '34px',
              maxHeight: '34px',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </button>
      </div>

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            padding: '20px',
          }}
          onClick={() => setIsOpen(false)}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '350px',
              backgroundColor: 'white',
              borderRadius: '20px',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
              overflow: 'hidden',
              marginTop: '80px',
              marginRight: '20px',
              animation: 'slideIn 0.3s ease',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                padding: '20px',
                borderBottom: '1px solid #eee',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <h2 style={{ margin: 0, fontSize: '18px', color: '#333' }}>
                Ferramentas de Acessibilidade
              </h2>
              <button
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  color: '#999',
                  padding: 0,
                  width: '30px',
                  height: '30px',
                }}
                onClick={() => setIsOpen(false)}
                aria-label="Fechar"
              >
                ✕
              </button>
            </div>

            <div
              style={{
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                maxHeight: '70vh',
                overflowY: 'auto',
              }}
            >
              <button
                onClick={increaseText}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px',
                  border: '1px solid #eee',
                  background: 'white',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontFamily: 'Urbanist, sans-serif',
                  fontSize: '14px',
                  color: '#333',
                }}
              >
                <img
                  src="/images/acessibilidade/icone-aumentar-texto.png"
                  alt=""
                  style={{ width: '24px', height: '24px' }}
                />
                <span>Aumentar texto</span>
              </button>

              <button
                onClick={decreaseText}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px',
                  border: '1px solid #eee',
                  background: 'white',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontFamily: 'Urbanist, sans-serif',
                  fontSize: '14px',
                  color: '#333',
                }}
              >
                <img
                  src="/images/acessibilidade/icone-diminuir-texto.png"
                  alt=""
                  style={{ width: '24px', height: '24px' }}
                />
                <span>Diminuir texto</span>
              </button>

              <button
                onClick={() => toggleFilter('grayscale')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px',
                  border: '1px solid #eee',
                  background: filters.grayscale ? '#4CAF50' : 'white',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontFamily: 'Urbanist, sans-serif',
                  fontSize: '14px',
                  color: filters.grayscale ? 'white' : '#333',
                  borderColor: filters.grayscale ? '#45a049' : '#eee',
                }}
              >
                <img
                  src="/images/acessibilidade/icone-escala-cinza.png"
                  alt=""
                  style={{ width: '24px', height: '24px' }}
                />
                <span>Escala de cinza</span>
              </button>

              <button
                onClick={() => toggleFilter('contrast')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px',
                  border: '1px solid #eee',
                  background: filters.contrast ? '#4CAF50' : 'white',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontFamily: 'Urbanist, sans-serif',
                  fontSize: '14px',
                  color: filters.contrast ? 'white' : '#333',
                  borderColor: filters.contrast ? '#45a049' : '#eee',
                }}
              >
                <img
                  src="/images/acessibilidade/icone-fundo-claro.png"
                  alt=""
                  style={{ width: '24px', height: '24px' }}
                />
                <span>Alto contraste</span>
              </button>

              <button
                onClick={() => toggleFilter('invert')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px',
                  border: '1px solid #eee',
                  background: filters.invert ? '#4CAF50' : 'white',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontFamily: 'Urbanist, sans-serif',
                  fontSize: '14px',
                  color: filters.invert ? 'white' : '#333',
                  borderColor: filters.invert ? '#45a049' : '#eee',
                }}
              >
                <img
                  src="/images/acessibilidade/icone-contraste-negativo.png"
                  alt=""
                  style={{ width: '24px', height: '24px' }}
                />
                <span>Contraste negativo</span>
              </button>

              <button
                onClick={resetAccess}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px',
                  border: '1px solid #eee',
                  background: '#f9f9f9',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontFamily: 'Urbanist, sans-serif',
                  fontSize: '14px',
                  color: '#333',
                  marginTop: '10px',
                  borderTop: '1px solid #eee',
                  paddingTop: '20px',
                }}
              >
                <img
                  src="/images/acessibilidade/icone-redefefinir.png"
                  alt=""
                  style={{ width: '24px', height: '24px' }}
                />
                <span>Redefinir</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
