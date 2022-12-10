import {useState} from "react";
import {restaurants} from "./Constantes"

function Busqueda (){

    const [valores, setValores] = useState({})
    const {nombre =""} = valores
    const [resultado, setResultado] = useState([]);
    
    const handleOnChange = (e) => {

      setValores({ ...valores, [e.target.name]: e.target.value})
    }


    const buscador = (e) => {
      e.preventDefault();
      const filtro = restaurants.
      filter(filtrar => filtrar.nombre.toUpperCase().includes(nombre.toUpperCase()));
      setResultado(filtro);
    }


    return (
    <div id="fondo">
        <div>
            <h2>Buscar Restaurantes</h2>
        </div>

        <div className="buscar">
            <input id="search" type="text" className="busca_texto" placeholder="ACTIVAR MAYUSCULAS"
            name="nombre" value={nombre} onChange={(e)=> {handleOnChange(e)}}/>
            <a className="boton">
                <i className="icon_buscar"></i>
            </a>
            <button id="boton" type="submit" onClick={buscador}>
                Ir
            </button>
        </div>
        


        


    
       

{
    resultado.map(x=> {

      return (
        
                    

     <div style={{marginTop: "230px"}} key={x.id} id="global" className="galeria">
    <div className="foto">
        <img src={x.url} alt="imagen.1"/>
    </div>
    <div id="CHINA"className="pie">
        <p id="nombre_C">{x.nombre}</p>
        <p id="descrip_C">{x.descrip}</p>
        <p id="direc_C">{x.direccion}</p>
        <p id="ciudad_C">{x.ciudad}</p> 
        
    </div>
</div>

                

                

      )
    })
}
</div>
 


   
    );
}



export default Busqueda