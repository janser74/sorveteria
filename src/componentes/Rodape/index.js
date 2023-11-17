import './style.css'

export default function Rodape() {
  return(
    <footer>
      <div className=' limitar-secao container-logo-informacoes'>
        <img src='assets/logo.png' alt='logomarca'/>
        <div>
          <h3>ENDEREÇO</h3>
          <p>Av.1 </p>
          <p>Belo Horizonte</p>
        </div>
        <div>
          <h3>CONTATO</h3>
          <p>info@meusite.com</p>
          <p>Tel: (31) 3333-3333</p>
        </div>
        <div>
          <h3>HORÁRIOS</h3>
          <p>ABERTO TODOS OS DIAS</p>
          <p>10:00 - 22:00</p>
        </div>
      </div>
      <div className='limitar-secao direito-autoral'>
        <p>Gelateria. Orgulhosamente desenvolvido por "Janser Souza"</p>
      </div>
    </footer>
  )
}