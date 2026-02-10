import "./Header.css";

export default function Header(params) {
     return (
       <header>
         <div className="header-container">
           <img className="logo-header" src="/images/logo.png" alt="Logo"></img>

           <div className="botoes-header">
             <span>Acessibilidade</span>
             <span>Contato</span>
           </div>
         </div>
       </header>
     );
};
