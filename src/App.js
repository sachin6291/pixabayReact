import React, { useState, useEffect} from 'react';
import Formulario from './components/Formulario'
import ListodoImagen from './components/ListadoImagen'


function App() {

  const[search, setSearch] = useState("")
  const[images, setImages] = useState([])
  const[paginaactual, setPaginaactual] = useState(1)
  const[totalpaginas, setTotalpaginas] = useState(1)

  useEffect(()=>{
    const consultaApi = async () =>{
      if(search === '') return
    
      const imagenesPorPagina = 32;
      const key = '17968933-8b9fd410c145a9f70c1b97c9f'
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagenesPorPagina}&page=${paginaactual}`
      
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      setImages(resultado.hits)

      setTotalpaginas(Math.ceil(resultado.totalHits / imagenesPorPagina))
      
      //volver hacia arriba a cargar nueva pagina
      const top = document.querySelector('.jumbotron')
      top.scrollIntoView({behavior:"smooth"})
    }
    consultaApi()
  },[search, paginaactual])

  //definir pagina anterior

  const pagiaAnterior = () => {

    const nuevaPaginaActual = paginaactual - 1
    if (paginaactual === 1) return
    setPaginaactual(nuevaPaginaActual)
   
  }
  const paginaSiguente = () => {

    const nuevaPaginaActual = paginaactual + 1
    if (paginaactual === totalpaginas) return
    setPaginaactual(nuevaPaginaActual)
    
  }

  return (
    
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center ">Search Image</p>
         <Formulario
          setSearch={setSearch}
         />
      </div>
      <div className="row justify-content-center">
         <ListodoImagen
          images = {images}
         />
         {(paginaactual !== 1)?
         <button
          type="button"
          className="btn btn-info mr1"
          onClick={pagiaAnterior}
        >&laquo; Previous</button>
        :null
         }
         {(paginaactual !== totalpaginas)?
        <button
          type="button"
          className="btn btn-info"
          onClick={paginaSiguente}
        >Next &raquo;</button>
        :null
         }
      </div>
    </div>

    
  );
}

export default App;
