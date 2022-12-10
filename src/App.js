import logo from './logo.svg';
import {Route, Routes} from "react-router-dom";
import Agregar from './componentes/Agregar';
import Busqueda from './componentes/Busqueda';
import Inicio from './componentes/Inicio';
import Restaurante from './componentes/Restaurantes';
import './App.css';




function App() {
  return (
    <div>

      
      <Inicio/>
    <Routes>
    <Route path="/" element={<Restaurante/>}/>
    <Route path="/restaurante" element={<Restaurante/>}/>
    <Route path="/busqueda" element={<Busqueda/>}/>
    <Route path="/agregar" element={<Agregar/>}/>

    

    

    </Routes>
   
    </div>
  );
}



export default App;