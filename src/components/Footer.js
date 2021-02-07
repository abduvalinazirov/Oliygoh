import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer  pb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-12 mb-4">
            <Link to="/">
              <img src="/images/logo.svg" alt="logo" />
            </Link>
            <p>Aniq maqsad oliygohga yetaklaydi</p>
          </div>
          <div className="col-md-5 col-12 mb-3">
            <h6>Ommabop teglar</h6>
            <div className="row ml-1">
              <div className="card">
                <button className="btn btn-outline-secondary">
                  Islohotlar
                </button>
              </div>
              <div className="card">
                <button className="btn btn-outline-secondary">
                  Oliygohlar
                </button>
              </div>
              <div className="card">
                <button className="btn btn-outline-secondary">
                  Oliy talim
                </button>
              </div>
              <div className="card">
                <button className="btn btn-outline-secondary">
                  Maslahatlar
                </button>
              </div>
              <div className="card">
                <button className="btn btn-outline-secondary">Mulohoza</button>
              </div>
              <div className="card">
                <button className="btn btn-outline-secondary">
                  Xalqaro hamkorlik
                </button>
              </div>
              <div className="card">
                <button className="btn btn-outline-secondary">Kontrakt</button>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-6 mb-3">
            <h6>Asosiy</h6>
            <ul>
              <li>
                <Link to="/news">Yangiliklar</Link>
              </li>
              <li>
                <Link to="/oliygohlar">Oliygohlar</Link>
              </li>
              <li>
                <Link to="/grantlar">Grantlar</Link>
              </li>
              <li>
                <Link to="/abituriyent">Abituriyent</Link>
              </li>
              <li>
                <Link to="#">Testlar</Link>
              </li>
              <li>
                <Link to="#">Talabalar</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-6">
            <h6>Ijtimoiy tarmoqlar</h6>
            <ul>
              <li>
                <Link to="#">Instagram</Link>
              </li>
              <li>
                <Link to="#">Telegram</Link>
              </li>
              <li>
                <Link to="#">Facebook</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row row2 d-flex justify-content-between">
          <div>
            <p className="pl-3 mt-2">
              2020 © Oliygoh, Barcha huquqlar himoyalangan
            </p>
          </div>
          <div>
            <p className="mt-2 pl-3 pr-3">
              <a href="#">Foydalanish shartlari</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
