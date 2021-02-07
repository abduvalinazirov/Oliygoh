import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbarlar">
      <div className="navbar1">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-9">
              <div className="d-flex align-items-center">
                <Link to="/">
                  <img src="/images/logo.svg" alt="logo" />
                </Link>
                <p>
                  Aniq maqsad —
                  <br /> oliygohga yetaklaydi
                </p>
              </div>
            </div>
            <div className="col-sm-4 col-3">
              <div className="d-flex align-items-center justify-content-end h-100">
                <div class="dropdown">
                  <button
                    class="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    O'zbek
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" href="#">
                      Rus
                    </a>
                    <a class="dropdown-item" href="#">
                      English
                    </a>
                    <a class="dropdown-item" href="#">
                      German
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar2">
        <div className="container">
          <nav class="navbar navbar-expand-lg">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon">
                <img src="/images/menu.svg" alt="" />
              </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <Link class="nav-link pl-0" to="/news">
                    Yangiliklar <span class="sr-only">(current)</span>
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Oliygohlar
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link class="dropdown-item" to="/oliygohlar">
                      Barchasi
                    </Link>
                    <a class="dropdown-item" href="#">
                      Mahaliy
                    </a>
                    <a class="dropdown-item" href="#">
                      Xorijiy
                    </a>
                    <a class="dropdown-item" href="#">
                      Xususiy
                    </a>
                    <a class="dropdown-item" href="#">
                      Xarbiy
                    </a>
                  </div>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/grantlar">
                    Grantlar
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/abituriyent">
                    Abiturient
                  </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Testlar
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Talabalar
                  </a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input
                  id="input1"
                  type="search"
                  className="form-control mr-2"
                />
                <label for="input1">
                  <img src="/images/search.svg" alt="search" className="pr-2" />
                </label>
              </form>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
