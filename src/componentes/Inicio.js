import {NavLink} from 'react-router-dom'
import "./estilos.css"
function Inicio (){
    return(
    <header >
        <div id="titulo">
            <img src= {require(`../componentes/img/LOGO-RESTAURANTE.jpg`)} alt="Restaurants.logo" id="logo"  />
        </div>

        <nav>
            <ul>
                <li><NavLink to="/restaurante">Inicio</NavLink></li>
                <li><NavLink to="/busqueda">Busqueda</NavLink></li>
                <li><NavLink to="/agregar">Agregar Un Restaurante</NavLink></li>
            </ul>
        </nav>
    </header>
    )
}
export default Inicio