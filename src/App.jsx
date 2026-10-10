
import './App.css'
import ambiente from './assets/ambiente.svg'
import empresa from './assets/empresa.svg'
import municipalidad from './assets/municipalidad.svg'
import noticia from './assets/noticia.svg'
import flecha from './assets/flecha.svg'
import flechaWhite from './assets/flechaWhite.svg'
import debateWhite from './assets/debateWhite.svg'
import { useState } from 'react'

const archivos = [
  {
    id: 1,
    title: 'Noticia periodística',
    image: noticia,
    link: './files/noticiaArchivo.jpg'
  },
  {
    id: 2,
    title: 'Comunicado oficial de la empresa MANSA',
    image: empresa,
    link: './files/comunicadoMansa.png'
  },
  {
    id: 3,
    title: 'Pronunciamiento de la Municipalidad de Sorochuco',
    image: municipalidad,
    link: './files/pronunciamientoMunicipal.jpg'
  },
  {
    id: 4,
    title: 'Informe ambiental de la Org. Cajamarca Verde',
    image: ambiente,
    link: './files/informeAmbiental.pdf'
  },
  {
    id: 5,
    title: 'Debate de los involucrados en el caso',
    image: debateWhite,
    link: 'https://padlet.com/danimazmela/cerro-verde-alto-debate-sobre-mineria-derechos-y-desarrollo-jdwh3775m8ohti86',
    flecha: flechaWhite,
    css: "debate-grupal"
  }
] 

function App() {

  const [archivoAbierto, setArchivoAbierto] = useState(null);

  return (
    <>
      <section className="App">
       <div className="title">
          <h2 className="title-text1-h2">FORO LEGAL - MATERIAL</h2>
          <h1>Caso Cerro Verde Alto</h1>
          <h2 className="title-text2-h2">Aquí reunimos los documentos y el debate de los involucrados</h2>
       </div>
       <div className="container-buttons">
        
        {archivos.map((archivo) => (
          <div key={archivo.id} className={`button-container ${archivo.css || ''}`}>
            <div className="prueba">
          <div className="button-info">
            <img src={archivo.image} alt={archivo.title} />
            <h3>{archivo.title}</h3>
          </div>
            <a
              onClick={() => setArchivoAbierto(archivo.id)}

              className={`button-info `}
            >
              <img src={archivo.flecha || flecha} alt="Flecha" />
            </a>
            </div>
            {
              archivoAbierto === archivo.id && (
                <div className="pdf-container">
                  <section
                    className="pdf-ventana"
                    role="dialog"
                    aria-modal="true"
                    aria-label={archivo.title}
                  >

                    <a onClick={() => setArchivoAbierto(null)} className="close-button">
                      Cerrar X
                    </a>
                    <iframe
                    src={archivo.link}
                    title={archivo.title}
                    allowFullScreen
                    />

                  </section>
                </div>
              )
            }
        </div>
        ))}

       </div>
      </section>

    </>
  )
}

export default App
