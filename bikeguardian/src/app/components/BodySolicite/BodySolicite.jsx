import './BodySolicite.css';

export default function Solicite() {
    return (
    <div className='DivSolicite'>
      <h1 className='solicite'>Solicite</h1>
      <div className='DivSolicite2'>
        <div className='ImgSolicite'></div>
        <div className='TextoSolicite'>
          <p>Sua bicicleta é mais do que um meio de<br/> transporte, é uma extensão do seu estilo de vida.<br/>
           Protegê-la é uma decisão sábia que garantirá<br/> que você continue a desfrutar dos momentos <br/>especiais que ela proporciona.<br/>
            Não espere pelo inesperado, garanta a<br/> segurança da sua bicicleta hoje mesmo com o<br/> nosso serviço de seguro especializado.<br/>
          Pedale com confiança, pedale protegido.</p>
          <button>
            <a href="/CriarConta" className="botao-link">Solicite seu Seguro</a>
          </button>
        </div>
      </div>
    </div>
    
    );
  }