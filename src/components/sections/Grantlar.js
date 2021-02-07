import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import "./Grantlar.css";

const options = [
  { value: "Узбекистан", label: "Узбекистан" },
  { value: "Австрия", label: "Австрия" },
  {
    value: "Автономное Силезское воеводство",
    label: "Автономное Силезское воеводство",
  },
  { value: "Азербайджан", label: "Азербайджан" },
  { value: "Албания", label: "Албания" },
  { value: "Алжир", label: "Алжир" },
  { value: "Уганда", label: "Уганда" },
  { value: "Украина", label: "Украина" },
  { value: "Уоллис и Футуна", label: "Уоллис и Футуна" },
  { value: "Уругвай", label: "Уругвай" },
  { value: "Уэйк", label: "Уэйк" },
  { value: "Уэлс", label: "Уэлс" },
];

export default class Grantlar extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <div className="grantlar py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h3 className="textRound">Фильтр</h3>
              <hr className="mt-4" />
              <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
                className="mb-4"
              />
            </div>
            <div className="col-md-9">
              <h3 className="textRound">Грантлар</h3>
              <div className="row mt-4">
                <div className="col-lg-4 mb-4 col-md-6 col-12">
                  <div className="box">
                    <div className="imgBox">
                      <img src="/images/grantlar/img (7).png" alt="rasm" />
                    </div>
                    <p className="badgeIMG">Islohotlar</p>
                  </div>
                  <p className="lastTime">
                    Qolgan vaqt: <span>15 kun</span>
                  </p>
                  <a href="#">
                    Avstraliya: magistraturada o’qish uchun to’liq grant va
                    18500 dollar stipendiya
                  </a>
                </div>
                <div className="col-lg-4 mb-4 col-md-6 col-12">
                  <div className="box">
                    <div className="imgBox">
                      <img src="/images/grantlar/img (8).png" alt="rasm" />
                    </div>
                    <p className="badgeIMG">Islohotlar</p>
                  </div>
                  <p className="lastTime">
                    Qolgan vaqt: <span>15 kun</span>
                  </p>
                  <a href="#">
                    Avstraliya: magistraturada o’qish uchun to’liq grant va
                    18500 dollar stipendiya
                  </a>
                </div>
                <div className="col-lg-4 mb-4 col-md-6 col-12">
                  <div className="box">
                    <div className="imgBox">
                      <img src="/images/grantlar/img.png" alt="rasm" />
                    </div>
                    <p className="badgeIMG">Islohotlar</p>
                  </div>
                  <p className="lastTime">
                    Qolgan vaqt: <span>15 kun</span>
                  </p>
                  <a href="#">
                    Avstraliya: magistraturada o’qish uchun to’liq grant va
                    18500 dollar stipendiya
                  </a>
                </div>
                <div className="col-lg-4 mb-4 col-md-6 col-12">
                  <div className="box">
                    <div className="imgBox">
                      <img src="/images/grantlar/img (1).png" alt="rasm" />
                    </div>
                    <p className="badgeIMG">Islohotlar</p>
                  </div>
                  <p className="lastTime">
                    Qolgan vaqt: <span>15 kun</span>
                  </p>
                  <a href="#">
                    Avstraliya: magistraturada o’qish uchun to’liq grant va
                    18500 dollar stipendiya
                  </a>
                </div>
                <div className="col-lg-4 mb-4 col-md-6 col-12">
                  <div className="box">
                    <div className="imgBox">
                      <img src="/images/grantlar/img (2).png" alt="rasm" />
                    </div>
                    <p className="badgeIMG">Islohotlar</p>
                  </div>
                  <p className="lastTime">
                    Qolgan vaqt: <span>15 kun</span>
                  </p>
                  <a href="#">
                    Avstraliya: magistraturada o’qish uchun to’liq grant va
                    18500 dollar stipendiya
                  </a>
                </div>
                <div className="col-lg-4 mb-4 col-md-6 col-12">
                  <div className="box">
                    <div className="imgBox">
                      <img src="/images/grantlar/img (3).png" alt="rasm" />
                    </div>
                    <p className="badgeIMG">Islohotlar</p>
                  </div>
                  <p className="lastTime">
                    Qolgan vaqt: <span>15 kun</span>
                  </p>
                  <a href="#">
                    Avstraliya: magistraturada o’qish uchun to’liq grant va
                    18500 dollar stipendiya
                  </a>
                </div>
                <div className="col-lg-4 mb-4 col-md-6 col-12">
                  <div className="box">
                    <div className="imgBox">
                      <img src="/images/grantlar/img (4).png" alt="rasm" />
                    </div>
                    <p className="badgeIMG">Islohotlar</p>
                  </div>
                  <p className="lastTime">
                    Qolgan vaqt: <span>15 kun</span>
                  </p>
                  <a href="#">
                    Avstraliya: magistraturada o’qish uchun to’liq grant va
                    18500 dollar stipendiya
                  </a>
                </div>
                <div className="col-lg-4 mb-4 col-md-6 col-12">
                  <div className="box">
                    <div className="imgBox">
                      <img src="/images/grantlar/img (5).png" alt="rasm" />
                    </div>
                    <p className="badgeIMG">Islohotlar</p>
                  </div>
                  <p className="lastTime">
                    Qolgan vaqt: <span>15 kun</span>
                  </p>
                  <a href="#">
                    Avstraliya: magistraturada o’qish uchun to’liq grant va
                    18500 dollar stipendiya
                  </a>
                </div>
                <div className="col-lg-4 mb-4 col-md-6 col-12">
                  <div className="box">
                    <div className="imgBox">
                      <img src="/images/grantlar/img (6).png" alt="rasm" />
                    </div>
                    <p className="badgeIMG">Islohotlar</p>
                  </div>
                  <p className="lastTime">
                    Qolgan vaqt: <span>15 kun</span>
                  </p>
                  <a href="#">
                    Avstraliya: magistraturada o’qish uchun to’liq grant va
                    18500 dollar stipendiya
                  </a>
                </div>
              </div>
              <div className="row mt-4 Links">
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
