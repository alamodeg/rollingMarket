

const footer = () => {
    return (
      <>
  
         <div className="container text-center">
         <div className="row">
      <ul className={`col-12 col-md-4 list-unstyled ${colCenter()}`}>
          <h5>Categorías</h5>
          <li>Comida</li>
          <li>Bebida</li>
          <li>Artículos de limpieza</li>
      </ul>
  
      <ul className={`col-12 col-md-4 list-unstyled ${colCenter()}`}>
          <h5>Dirección:</h5>
          <li>Laprida 605, San Miguel de Tucumán, Tucumán.</li>
          <br/>
          <h5>Horadios:</h5>
          <li>Lunes a sabados de 9 a 18hrs.</li>
      </ul>
  
      <ul className={`col-12 col-md-4 list-unstyled ${colCenter()}`}>
          <p>logo</p>
      </ul>
  </div>
          <br/>
          <div className="row">
              <p>Copyright RollingMarket | tenemos todo lo que necesitas - 2024. Todos los derechos reservados.</p>
          </div>
  
         </div>
  
  
      
      </>
    )
  
    
  function colCenter() {
     
      const widthWindow = window.innerWidth; // devuelve el ancho interior de la ventana del navegador en píxeles
  
      if (widthWindow <= 576) { 
          return 'text-center';
      } else {
          return 'text-start';
      }
  }
  
  }
  
  export default footer
  