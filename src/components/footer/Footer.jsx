import './styleFooter.css';
import logoFooter from '../../assets/img/logoFooter.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <>
      <div className="container-fluid text-center">
        <div className="row p-3">
          <ul className="col-12 col-md-4">
            <h5 className="titleList">Categorías</h5>
            <li className="article"><a href="">Comida</a></li>
            <li className="article"><a href="">Bebidas</a></li>
            <li className="article"><a href="">Artículos de limpieza</a></li>
          </ul>

          <ul className="col-12 col-md-4">
            <h5 className="titleList">Dirección:</h5>
            <li className="article">Laprida 605, San Miguel de Tucumán, Tucumán.</li>
            <hr />
            <h5 className="titleList">Horarios:</h5>
            <li className="article">Lunes a sabados de 9 a 18hrs.</li>
          </ul>

            <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
            <img className="logoFooter" src={logoFooter} alt="logoRollingMarket" />
            </div>

        </div>
        <div className="row copyright pt-3 justify-content-center">
          <p className="copy col-12 col-md-8 pt-2">
          &copy; 2024 RollingMarket | Tenemos todo lo que necesitas - <a href="">Política de privacidad</a>
          </p>

          <div className="col-12 col-md-4">
          <ul className="networkList">
                    <li>
                        <a href=""> 
                        <i class="bi bi-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="bi bi-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="bi bi-twitter"></i>
                        </a>
                    </li>
                </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
