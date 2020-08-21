import React from 'react';
import Imagen from './Imagen'

const ListadoImagen = ({images}) => {
  return ( 
    <div className="col-12 p-5 row">
      {images.map(image =>(
        <Imagen
        key={image.id}
        image={image}
        />
      ))}
    </div>
   );
}
 
export default ListadoImagen;