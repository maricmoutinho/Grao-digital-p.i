'use client';

import { useEffect } from 'react';

export default function VLibrasWidget() {
  useEffect(() => {
    // Carregar o script do VLibras
    const script = document.createElement('script');
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    script.async = true;
    document.body.appendChild(script);

    // Inicializar o widget após o script carregar
    script.onload = () => {
      new window.VLibras.Widget('https://vlibras.gov.br/app');

      // Ocultar o ícone original do VLibras
      const style = document.createElement('style');
      style.innerHTML = `
        div[vw-access-button] {
          display: none !important;
        }
      `;
      document.head.appendChild(style);
    };
  }, []);

  return (
    <>
      {/* Placeholder cinza para o VLibras */}
      <div
        style={{
          position: 'fixed',
          top: '190px',
          right: '20px',
          width: '50px',
          height: '50px',
          backgroundColor: '#4CAF50',
          borderRadius: '8px',
          cursor: 'pointer',
          zIndex: 9999,
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
        onClick={() => {
          // Ativar o VLibras quando clicar no placeholder
          const vLibrasButton = document.querySelector('div[vw-access-button]');
          if (vLibrasButton) {
            vLibrasButton.click();
          }
        }}
        title="Ativar VLibras"
      >
        <img
          src="/images/acessibilidade/logo-libra.png"
          alt="VLibras"
          style={{
            maxWidth: '34px',
            maxHeight: '34px',
          }}
        />
      </div>

      {/* Widget VLibras (oculto) */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <div vw class="enabled">
              <div vw-access-button class="active"></div>
              <div vw-plugin-wrapper>
                <div class="vw-plugin-top-wrapper"></div>
              </div>
            </div>
          `,
        }}
      />
    </>
  );
}
