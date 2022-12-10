function Restaurante (){
    const restaurants=[
        {
            url: require(`./img/CHINA.jpg`),
            nombre: "COMIDA ORIENTAL",
            descrip: "Delicias de la comida Oriental",
            direccion: "Cra 65 Calle 25 #58-22",
            ciudad: "Bogóta"
        },
        {
            url: require(`./img/COLOMBIANA.jpg`),
            nombre: "LOS PARCEROS",
            descrip: "Rich traditional Colombian food",
            direccion: "Av. Ferro Carril N° #25-16 ",
            ciudad: "New York"
        },
        {
            url: require(`./img/C_RAPIDA.jpg`),
            nombre: "MC GORDOS",
            descrip: "Comidas rapidas y postres",
            direccion: "Cra 36 Call 45",
            ciudad: "Medellín"
        },
        {
            url: require(`./img/MEXICANA.jpg`),
            nombre: "VIVA MEXICO",
            descrip: "Sabrosas comidas Mexicanas",
            direccion: "Cra 2 #45-20",
            ciudad: "Cartagena"
        }
    ];

    return( <div id="fondo"> 

    <div>
        <h2>RESTAURANTES DE EXCELENCIA</h2>
    </div>
    

    {restaurants.map((x)=>{
 
 return (
    <div key={x.id} id="global" className="galeria">
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
})}
    </div>




)
}


export default Restaurante