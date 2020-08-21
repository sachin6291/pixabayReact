import React, {useState} from 'react';
import Error from './Error'

const Formulario = ({setSearch}) => {
  const[searchinput, setSearchinput] =useState("")
  const[error, setError]= useState(false)

  const searchImage = e =>{
    e.preventDefault()

    //validar
    if(searchinput.trim() ===''){
      setError(true)
      return
    }
    setError(false)
    //enviar a componente principal
    setSearch(searchinput)
  }
  return ( 
    <form
      onSubmit={searchImage}
    >
      <div className="row">
        <div className ="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search an image: football, coffee..."
            onChange={e=> setSearchinput(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="Search"
          />
        </div>
      </div>
      {error ? <Error message="You must fill in the search bar to search"/> : null}
    </form>
   );
}
 
export default Formulario;