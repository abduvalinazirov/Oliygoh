import { Link } from "react-router-dom";
import "./Section.css";
function Section() {
  return (
    <section>
      <div className="container section11">
        <div className="row">
          <div className="col-lg-5 mt-5">
            <img src="/images/main/img.png" alt="i" />
            <a href="#">
              Tibbiyot oliy taʼlim muassasalarida oliy taʼlim necha yildan
              iborat va qanday mutaxassislik olinadi?{" "}
            </a>
            <p>
              Ko‘pchilik abituriyentlar orasida tibbiyot sohasiga qiziquvchilar
              yetarlicha. Kimdir shifokor bo‘lishga qiziqsa, yana kimdir...
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <p>Dolzarb</p>
              <p>28 май 03:49</p>
            </div>
            <hr />
          </div>
          <div className="col-lg-7">
            <div className="d-flex align-items-center mt-5">
              <img src="/images/main/element.png" alt="" />
              <h3>Ommabop</h3>
            </div>
            <hr className="first" />
            <div className="row">
              <div className="col-md-9">
                <a href="#">O‘zbekistonda yangi madrasa ochildi</a>
              </div>
              <div className="col-md-3 justify-content-end d-flex">
                <p>25 may 16:18</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-9">
                <a href="#">2019-2020 oʻquv yili rasman yakunlandi</a>
              </div>
              <div className="col-md-3 justify-content-end d-flex">
                <p>25 may 14:10</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-9">
                <a href="#">
                  Matematika fanidan test hamda ijodiy imtihon orqali qaysi
                  yo‘nalishlar va oliygohlarga kirish mumkin?{" "}
                </a>
              </div>
              <div className="col-md-3 justify-content-end d-flex">
                <p>24 may 22:32</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-9">
                <a href="#">
                  2019/2020 o‘quv yili uchun “Filologiya va tillarni o‘qitish:
                  malay tili" yo‘nalishi bo‘yicha o‘tish ballari{" "}
                </a>
              </div>
              <div className="col-md-3 justify-content-end d-flex">
                <p>24 may 15:13</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-9">
                <a href="#" className="last">
                  2019/2020 o‘quv yili uchun “Filologiya va tillarni o‘qitish:
                  urdu tili” yo‘nalishi bo‘yicha o‘tish ballari{" "}
                </a>
              </div>
              <div className="col-md-3 justify-content-end d-flex">
                <p>24 may 15:13</p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div className="section12">
        <div className="container">
          <div className="row text-center align-items-center">
            <div className="col-lg-2">
              <img src="/images/main/Frame.png" alt="" />
            </div>
            <div className="col-lg-2 my-2">
              <p>Testlar soni</p>
              <span className="span1">210</span>
            </div>
            <div className="col-lg-2 my-2">
              <p>Savollar soni</p>
              <span className="span2">6420</span>
            </div>
            <div className="col-lg-2 my-2">
              <p>Ishlanganlar soni</p>
              <span className="span3">20400</span>
            </div>
            <div className="col-lg-2 my-2">
              <p>Ortacha natija</p>
              <span className="span4">68%</span>
            </div>
            <div className="col-lg-2 my-2 ">
              <button className="btn btn-block buttons">Test topshirish</button>
            </div>
          </div>
        </div>
      </div>
      <div className="section13">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h3 className="textRound">Testlar</h3>
              <hr />
              <div className="row">
                <div className="col-8 d-flex align-items-center">
                  <p>Ikkinchi va undan yuqori darajali tenglamalar sistemasi</p>
                </div>
                <div className="col-4">
                  <button className="btn buttons btn-block">
                    Testni ishlash
                  </button>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-8 d-flex align-items-center">
                  <p>Parametrli tenglamalar sistemasi</p>
                </div>
                <div className="col-4">
                  <button className="btn buttons btn-block">
                    Testni ishlash
                  </button>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-8 d-flex align-items-center">
                  <p>Irratsional tenglamalar va tengsizliklar</p>
                </div>
                <div className="col-4">
                  <button className="btn buttons btn-block">
                    Testni ishlash
                  </button>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-8 d-flex align-items-center">
                  <p>Ko‘rsatkichli funksiya va uning xossalari</p>
                </div>
                <div className="col-4">
                  <button className="btn buttons btn-block">
                    Testni ishlash
                  </button>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-8 d-flex align-items-center">
                  <p>Arksinus, akrkosinus, arktangens va arkkotangens</p>
                </div>
                <div className="col-4">
                  <button className="btn buttons btn-block">
                    Testni ishlash
                  </button>
                </div>
              </div>
              <hr />
              <h3 className="textRound">Ko'p o'qilganlar</h3>
              <div className="card1">
                <div className="card2">
                  <a href="#">
                    Matematika va fizika fanlaridan qaysi yo‘nalishlarga hujjat
                    topshirish mumkin?
                  </a>
                  <div className="d-flex align-items-center justify-content-between">
                    <p>12 мая, 12:46</p>
                    <p className="d-flex align-items-center">
                      <img src="/images/main/union.svg" alt="s" />
                      <span>9468</span>
                    </p>
                  </div>
                </div>
                <hr />
                <div className="card2">
                  <a href="#">
                    Kimyo va biologiya fanlaridan qaysi yo‘nalishlarga hujjat
                    topshirish mumkin?
                  </a>
                  <div className="d-flex align-items-center justify-content-between">
                    <p>12 мая, 12:46</p>
                    <p className="d-flex align-items-center">
                      <img src="/images/main/union.svg" alt="s" />
                      <span>8469</span>
                    </p>
                  </div>
                </div>
                <hr />
                <div className="card2">
                  <a href="#">
                    Qayta tashkil etilayotgan texnikum bitiruvchilari tibbiyot
                    oliy o‘quv yurtiga imtihonsiz 2-kursga qabul qilinadi
                  </a>
                  <div className="d-flex align-items-center justify-content-between">
                    <p>12 мая, 12:46</p>
                    <p className="d-flex align-items-center">
                      <img src="/images/main/union.svg" alt="s" />
                      <span>8051</span>
                    </p>
                  </div>
                </div>
                <hr />
                <div className="card2">
                  <a href="#">Matematika yo‘nalishlaridagi kirish ballari</a>
                  <div className="d-flex align-items-center justify-content-between">
                    <p>12 мая, 12:46</p>
                    <p className="d-flex align-items-center">
                      <img src="/images/main/union.svg" alt="s" />
                      <span>2685</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="card3">
                <div className="card4">
                  <h3>Oliygohlar togrisida toliq malumot</h3>
                  <p>
                    Oliygohlarning talim yonalishlari, qabul kvotalari va kirish
                    ballari
                  </p>
                  <button className="buttons border-0 px-4">
                    Bolimga otish
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <h3 className="textRound">Yangiliklar</h3>
              <hr />
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="box">
                      <div className="imgBox">
                        <img src="/images/main/img (1).png" alt="rasm" />
                      </div>
                      <p className="badgeIMG">Islohotlar</p>
                    </div>
                    <span>24 may, 15:13</span>
                    <a href="#">
                      Matematika va fizika fanlaridan qaysi yo‘nalishlarga
                      hujjat topshirish mumkin?{" "}
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="box">
                      <div className="imgBox">
                        <img src="/images/main/img (2).png" alt="rasm" />
                      </div>
                      <p className="badgeIMG">Oliygohlar</p>
                    </div>
                    <span>24 may, 15:13</span>
                    <a href="#">
                      Tarix va chet tili fanlaridan qaysi yo‘nalishlarga hujjat
                      topshirish mumkin?
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="box">
                      <div className="imgBox">
                        <img src="/images/main/img (3).png" alt="rasm" />
                      </div>
                      <p className="badgeIMG">Oliy talim</p>
                    </div>
                    <span>24 may, 15:13</span>
                    <a href="#">
                      Ona tili va adabiyoti hamda chet tili fanlaridan qaysi
                      yo‘nalishlarga hujjat topshirish mumkin?
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="box">
                      <div className="imgBox">
                        <img src="/images/main/img (4).png" alt="rasm" />
                      </div>
                      <p className="badgeIMG">Islohotlar</p>
                    </div>
                    <span>24 may, 15:13</span>
                    <a href="#">
                      Maktab bitiruvchilariga 15-iyungacha shahodatnomalari
                      (attestat) topshiriladi
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="box">
                      <div className="imgBox">
                        <img src="/images/main/img (5).png" alt="rasm" />
                      </div>
                      <p className="badgeIMG">Xalqaro hamkorlik</p>
                    </div>
                    <span>24 may, 15:13</span>
                    <a href="#">
                      Matematika hamda ona tili va adabiyoti fanlaridan qaysi
                      yo‘nalishlarga hujjat topshirish mumkin?
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="box">
                      <div className="imgBox">
                        <img src="/images/main/img (6).png" alt="rasm" />
                      </div>
                      <p className="badgeIMG">Maslahatlar</p>
                    </div>
                    <span>24 may, 15:13</span>
                    <a href="#">
                      Sirtqi taʼlimda ham davlat granti asosida taʼlim olish
                      mumkinmi?
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="box">
                      <div className="imgBox">
                        <img src="/images/main/img (7).png" alt="rasm" />
                      </div>
                      <p className="badgeIMG">Mulohaza</p>
                    </div>
                    <span>24 may, 15:13</span>
                    <a href="#">
                      Yuridik universitetining talabalari o‘qishning so‘nggi
                      bosqichini bevosita amaliyotda o‘tkazadilar
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="box">
                      <div className="imgBox">
                        <img src="/images/main/img (8).png" alt="rasm" />
                      </div>
                      <p className="badgeIMG">Islohotlar</p>
                    </div>
                    <span>24 may, 15:13</span>
                    <a href="#">
                      Ona tili va adabiyoti hamda chet tili fanlaridan qaysi
                      yo‘nalishlarga hujjat topshirish mumkin?
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="box">
                      <div className="imgBox">
                        <img src="/images/main/img (9).png" alt="rasm" />
                      </div>
                      <p className="badgeIMG">Oliygohlar</p>
                    </div>
                    <span>24 may, 15:13</span>
                    <a href="#">
                      5 ta viloyatda pedagogika instituti tashkil etilmoqda
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="box">
                      <div className="imgBox">
                        <img src="/images/main/img (19).png" alt="rasm" />
                      </div>
                      <p className="badgeIMG">Kontrakt</p>
                    </div>
                    <span>24 may, 15:13</span>
                    <a href="#">
                      Kirish imtihonlari testlari qay darajada
                      soddalashtiriladi? – DTM izoh berdi
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <Link to="/news" className="d-inline-block btn link">
                  Barchasini ko'rish
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section14">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="textRound">So'ngi grantlar</h3>
            <a href="#" className="grantlar">
              Barcha grantlar
            </a>
          </div>
          <hr />
          <div className="row mt-4">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="box">
                <div className="imgBox">
                  <img src="/images/main/img (10).png" alt="rasm" />
                </div>
                <p className="badgeIMG">Islohotlar</p>
              </div>
              <p className="lastTime">
                Qolgan vaqt: <span>15 kun</span>
              </p>
              <a href="#">
                Avstraliya: magistraturada o’qish uchun to’liq grant va 18500
                dollar stipendiya
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="box">
                <div className="imgBox">
                  <img src="/images/main/img (11).png" alt="rasm" />
                </div>
                <p className="badgeIMG">Aktyorlik</p>
              </div>
              <p className="lastTime">
                Qolgan vaqt: <span>43 kun</span>
              </p>
              <a href="#">
                Avstraliya: magistraturada o’qish uchun to’liq grant va 18500
                dollar stipendiya
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="box">
                <div className="imgBox">
                  <img src="/images/main/img (12).png" alt="rasm" />
                </div>
                <p className="badgeIMG">Barcha soha</p>
              </div>
              <p className="lastTime">
                Qolgan vaqt: <span>40 kun</span>
              </p>
              <a href="#">
                Avstraliya: Magistratura va bakalavr bosqichlari uchun to’liq va
                qisman grantlar
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="box">
                <div className="imgBox">
                  <img src="/images/main/img (13).png" alt="rasm" />
                </div>
                <p className="badgeIMG">Dunyo boylab</p>
              </div>
              <p className="lastTime">
                Qolgan vaqt: <span>55 kun</span>
              </p>
              <a href="#">
                Doktoranturada talabalari va universitet
                professor-o’qituvchilariga tadqiqot olib borish uchun 15 ming
                AQSH dollarigacha grant
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
