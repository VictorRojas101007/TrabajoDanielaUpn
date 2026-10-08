
import './App.css'
import ambiente from './assets/ambiente.svg'
import empresa from './assets/empresa.svg'
import municipalidad from './assets/municipalidad.svg'
import noticia from './assets/noticia.svg'
import flecha from './assets/flecha.svg'
import flechaWhite from './assets/flechaWhite.svg'
import debateWhite from './assets/debateWhite.svg'

function App() {


  return (
    <>
      <section className="App">
       <div className="title">
          <h2 className="title-text1-h2">FORO LEGAL - MATERIAL</h2>
          <h1>Caso Cerro Verde Alto</h1>
          <h2 className="title-text2-h2">Aquí reunimos los documentos y el debate de los involucrados</h2>
       </div>
       <div className="container-buttons">
        <div className="button-container">
          <div className="button-info">
            <img src={noticia} alt="Noticia periodística" />
            <h3>Noticia periodística</h3>
          </div>
            <a
              href="https://drive.google.com/file/d/1_7aPC2zmqfk6fFgTbfQyx6Q9J2VafFhu/view?usp=drivesdk"
              className="button-info"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={flecha} alt="Flecha" />
            </a>
        </div>
        <div className="button-container">
          <div className="button-info">
            <img src={empresa} alt="Comunicado de Andina del Norte" />
            <h3>Comunicado oficial de la empresa MANSA</h3>
          </div>
            <a
              href="https://drive.google.com/file/d/1mLGmLUhWG8XDrltwjyfnRVBEvyOqhJ5-/view?usp=drivesdk"
              className="button-info"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={flecha} alt="Flecha" />
            </a>
        </div>
        <div className="button-container">
          <div className="button-info">
            <img src={municipalidad} alt="Municipalidad de Sorochuco" />
            <h3>Pronunciamiento de la Municipalidad de Sorochuco</h3>
          </div>
            <a
              href="https://drive.google.com/file/d/1s8178zWzi7U5j1rRRhaGGmhdx39YIIG2/view?usp=drivesdk"
              className="button-info"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={flecha} alt="Flecha" />
            </a>
        </div>
        <div className="button-container">
          <div className="button-info">
            <img src={ambiente} alt="Informe ambiental" />
            <h3>Informe ambiental de la Org. Cajamarca Verde</h3>
          </div>
            <a
              href="https://drive.google.com/file/d/1j3TNHCJjHKgQUSq6F6QSCiRFO9oibUGj/view?usp=drivesdk"
              className="button-info"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={flecha} alt="Flecha" />
            </a>
        </div>
        <div className="button-container debate-grupal">
          <div className="button-info ">
            <img src={debateWhite} alt="Debate grupal en Padlet" />
            <h3>Debate de los involucrados en el caso</h3>
          </div>
            <a
              href="https://padlet.com/danimazmela/cerro-verde-alto-debate-sobre-mineria-derechos-y-desarrollo-jdwh3775m8ohti86"
              className="button-info"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={flechaWhite} alt="Flecha" />
            </a>
        </div>
       </div>
      </section>

    </>
  )
}

export default App
