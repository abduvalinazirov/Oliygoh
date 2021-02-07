import React from "react";
import { Link } from "react-router-dom";
import "./Abituriyent.css";

export default function Abituriyent() {
  return (
    <div className="Abituriyent">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="profil">
              <h3>Profil</h3>
              <div className="name d-flex align-items-center">
                <img src="/images/profile/Ellipse 33.svg" alt="sa" />
                <div>
                  <h6>Azamat Sh.</h6>
                  <p>+998 91 357-39-79</p>
                </div>
              </div>
              <p className="menu">KO’RSATKICHLAR</p>
              <div className="row">
                <div className="col-4">
                  <h5>13</h5>
                  <span>Imtihon</span>
                </div>
                <div className="col-4">
                  <h5>1.2K</h5>
                  <span>Ballar</span>
                </div>
                <div className="col-4">
                  <h5>76%</h5>
                  <span>Aniqlik</span>
                </div>
              </div>
              <hr />
              <p className="menu">MENU</p>
              <div className="links-0 row">
                <div className="col-lg-12 col-md-3 col-sm-6 col-12">
                  <a href="#">
                    <div className="d-flex">
                      <div className="quti">
                        <span className="icon icon-1 mr-3"></span>
                      </div>
                      <p>Imtihonlarim</p>
                    </div>
                  </a>
                </div>
                <div className="col-lg-12 col-md-3 col-sm-6 col-12">
                  <a href="#">
                    <div className="d-flex">
                      <div className="quti">
                        <span className="icon icon-2 mr-4"></span>
                      </div>
                      <p>Balansim</p>
                    </div>
                  </a>
                </div>
                <div className="col-lg-12 col-md-3 col-sm-6 col-12">
                  <a href="#">
                    <div className="d-flex">
                      <div className="quti">
                        <span className="icon icon-3"></span>
                      </div>
                      <p>Sozlamalar</p>
                    </div>
                  </a>
                </div>
                <div className="col-lg-12 col-md-3 col-sm-6 col-12">
                  <a href="#">
                    <div className="d-flex">
                      <div className="quti">
                        <span className="icon icon-4"></span>
                      </div>
                      <p>Chiqish</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="box3 row text-center">
                <div className="col-lg-2 mt-2 ">

                <img src="/images/profile/16.svg" alt="a" />
                </div>
                <div className="col-lg-10">
                  <h4>Savollaringiz bormi?</h4>
                  <a href="$">Murojaat etish</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="exam">
              <h3>Imtihonlarim</h3>
              <h5>Umumiy natijalar</h5>
              <div className="row">
                <div className="col-md-8">
                  <div className="box5">
                    <div className="row">
                      <div className="col-md-3 col-6">
                        <h6>13</h6>
                        <p>Imtihon</p>
                      </div>
                      <div className="col-md-3 col-6">
                        <h6>198</h6>
                        <p>O’rt. ball</p>
                      </div>
                      <div className="col-md-3 col-6">
                        <h6>25ta</h6>
                        <p>O’rt. javob</p>
                      </div>
                      <div className="col-md-3 col-6">
                        <h6>76%</h6>
                        <p>O’rt. aniqlik</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box6">
                    <img src="/images/profile/Vector.png" alt="" />
                    <div>
                      <h6>215</h6>
                      <span>Maks. ball</span>
                    </div>
                  </div>
                </div>
              </div>
              <h5>Imtihonlar</h5>
              <div className="jadval">
                <table class="table table-striped table-borderless">
                  <thead>
                    <tr className="border-0">
                      <th scope="col">#</th>
                      <th scope="col">Blok I</th>
                      <th scope="col">Blok II</th>
                      <th scope="col">Blok III</th>
                      <th scope="col">Jami</th>
                      <th scope="col">Vaqt</th>
                      <th scope="col">Tugatildi</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>
                        <h6>31.0</h6>
                        <p>(10 / 33%)</p>
                      </td>
                      <td>
                        <h6>31.0</h6>
                        <p>(10 / 33%)</p>
                      </td>
                      <td>
                        <h6>31.0</h6>
                        <p>(10 / 33%)</p>
                      </td>
                      <td>
                        <h5>53.5</h5>
                        <h3>(25 / 28%)</h3>
                      </td>
                      <td>
                        <h6>165</h6>
                        <p>min</p>
                      </td>
                      <td>
                        <h4>2 min</h4>
                      </td>
                      <td>
                        <button className="btn btn-outline-secondary">
                          Batafsil
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>
                        <h6>31.0</h6>
                        <p>(10 / 33%)</p>
                      </td>
                      <td>
                        <h6>31.0</h6>
                        <p>(10 / 33%)</p>
                      </td>
                      <td>
                        <h6>31.0</h6>
                        <p>(10 / 33%)</p>
                      </td>
                      <td>
                        <h5>153.5</h5>
                        <h3>(25 / 28%)</h3>
                      </td>
                      <td>
                        <h6>165</h6>
                        <p>min</p>
                      </td>
                      <td>
                        <h4>4 min</h4>
                      </td>
                      <td>
                        <button className="btn btn-outline-secondary">
                          Batafsil
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>
                        <h6>31.0</h6>
                        <p>(10 / 33%)</p>
                      </td>
                      <td>
                        <h6>31.0</h6>
                        <p>(10 / 33%)</p>
                      </td>
                      <td>
                        <h6>31.0</h6>
                        <p>(10 / 33%)</p>
                      </td>
                      <td>
                        <h5>245.5</h5>
                        <h3>(25 / 28%)</h3>
                      </td>
                      <td>
                        <h6>165</h6>
                        <p>min</p>
                      </td>
                      <td>
                        <h4>30.09.2020</h4>
                      </td>
                      <td>
                        <button className="btn btn-outline-secondary">
                          Batafsil
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row Links mt-3">
                <div className="d-inline-block ml-auto">
                  <Link to="#" className="d-inline-block btn link">
                    <img src="/images/news/left.png" alt="left" />
                  </Link>
                  <Link to="#" className="d-inline-block btn link">
                    1
                  </Link>
                  <Link to="#" className="d-inline-block btn link">
                    2
                  </Link>
                  <Link to="#" className="d-inline-block btn link">
                    3
                  </Link>
                  <Link to="#" className="d-inline-block btn link">
                    4
                  </Link>
                  <Link to="#" className="d-inline-block btn link mr-3">
                    <img src="/images/news/right.png" alt="right" />
                  </Link>
                </div>
              </div>
              <div className="aksiya">
                <div className="row align-items-center justify-content-between">
                  <div className="col-md-1">
                    <div>
                      <img src="/images/profile/Vector.svg" alt="" />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <p>
                      Super aksiya! <a href="#">Matematika</a>,
                      <a href="#">Fizika</a> hamda <a href="#">Ingliz</a> tili
                      fanlaridan testlar!
                    </p>
                    <span>-20% foyda qiling!!!</span>
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex justify-content-end">
                      <button className="btn buttons">Testga o'tish</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
