import React from 'react';

import '../../styles/styles.css';
import { BsCoin } from 'react-icons/bs';

import Img1 from '../../assets/bone-mr-robot/mrrobot-bone.jpeg';
import Img2 from '../../assets/caixa-som/caixa3.jpeg';
import Img3 from '../../assets/celular/celular1.jpeg';
import Img4 from '../../assets/kali/kali1.png';
import Img5 from '../../assets/mouse/mouse1.jpeg';
import Img6 from '../../assets/mousepad-hellofriends/hellofriends1.jpeg';
// import Img7 from '../../assets/mousepad-robot/robot1.jpeg';

export const Home = () => {
  return (
    <>
      <main>
        <section className="section1 d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <h1 className="h1section" data-aos="fade-up">
                  Os melhores Produtos você encontra aqui!
                </h1>
                <h3
                  className="h3section"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  Consiga agora os melhores produtos da Feelz1337
                </h3>
                <div data-aos="fade-up" data-aos-delay="600">
                  <div className="text-center text-lg-start">
                    <a
                      href="#about"
                      className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                    >
                      <span>Ver ofertas de gadgets</span>
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section2 ">
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-10">
                <h3 className="h3section2">Gadgets de cocina</h3>
                <p className="psection2">
                  Consiga agora os melhores produtos da Feelz1337
                </p>
              </div>

              <div className="col-md-2 ">
                <a
                  href="#about"
                  className="defaut-button scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span className="span-vertodos">Ver Todos</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="container margin-gadgets">
            <div className="row">
              <div className="col-md-4">
                <div className="card card2">
                  <img
                    src={Img1}
                    className="card-img-top imgcard"
                    alt="..."
                  ></img>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <h5 className="card-title">Boné Mr Robot</h5>
                      </div>

                      <div className="col-md-4">
                        <p className="price">
                          R$ 65,00{' '}
                          <i>
                            <BsCoin size={20} color={'#0582CA'} />
                          </i>
                        </p>
                      </div>
                    </div>

                    <p className="card-text pcard">
                      Adquira agora os melhores produtos da Feelz1337{' '}
                    </p>

                    <div>
                      <a href="" className="defaut-button2">
                        Comprar pelo Whatsapp
                      </a>

                      <a
                        href="bone-mr-robot"
                        className="defaut-button3 scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                      >
                        <span className="span-vertodos">Ver</span>
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card2">
                  <img
                    src={Img2}
                    className="card-img-top imgcard"
                    alt="..."
                  ></img>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <h5 className="card-title">JBL Flip</h5>
                      </div>

                      <div className="col-md-4">
                        <p className="price">
                          R$400,00{' '}
                          <i>
                            <BsCoin size={20} color={'#0582CA'} />
                          </i>
                        </p>
                      </div>
                    </div>

                    <p className="card-text pcard">
                      Adquira agora os melhores produtos da Feelz1337 Store
                    </p>

                    <div>
                      <a href="" className="defaut-button2">
                        Comprar pelo Whatsapp
                      </a>

                      <a
                        href="caixa-de-som"
                        className="defaut-button3 scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                      >
                        <span className="span-vertodos">Ver</span>
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card card2">
                  <img
                    src={Img3}
                    className="card-img-top imgcard"
                    alt="..."
                  ></img>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <h5 className="card-title">Xiaomi redmi 10c</h5>
                      </div>

                      <div className="col-md-4">
                        <p className="price">
                          R$ 1,500{' '}
                          <i>
                            <BsCoin size={20} color={'#0582CA'} />
                          </i>
                        </p>
                      </div>
                    </div>

                    <p className="card-text pcard">
                      Adquira agora os melhores produtos da Feelz1337{' '}
                    </p>

                    <div>
                      <a href="" className="defaut-button2">
                        Comprar pelo Whatsapp
                      </a>

                      <a
                        href="xiaomi-redmi-10c"
                        className="defaut-button3 scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                      >
                        <span className="span-vertodos">Ver</span>
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card2 margin-second-cards">
                  <img
                    src={Img4}
                    className="card-img-top imgcard"
                    alt="..."
                  ></img>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <h5 className="card-title">Mousepad Kali Linux</h5>
                      </div>

                      <div className="col-md-4">
                        <p className="price">
                          R$ 40,00{' '}
                          <i>
                            <BsCoin size={20} color={'#0582CA'} />
                          </i>
                        </p>
                      </div>
                    </div>

                    <p className="card-text pcard">
                      Adquira agora os melhores produtos da Feelz1337{' '}
                    </p>

                    <div>
                      <a href="" className="defaut-button2">
                        Comprar pelo Whatsapp
                      </a>

                      <a
                        href="mousepad-kali-linux"
                        className="defaut-button3 scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                      >
                        <span className="span-vertodos">Ver</span>
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Outro Card */}

              <div className="col-md-4">
                <div className="card card2 margin-second-cards">
                  <img
                    src={Img5}
                    className="card-img-top imgcard"
                    alt="..."
                  ></img>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <h5 className="card-title">Mouse Razer Original</h5>
                      </div>

                      <div className="col-md-4">
                        <p className="price">
                          R$ 230,00{' '}
                          <i>
                            <BsCoin size={20} color={'#0582CA'} />
                          </i>
                        </p>
                      </div>
                    </div>

                    <p className="card-text pcard">
                      Adquira agora os melhores produtos da Feelz1337{' '}
                    </p>

                    <div>
                      <a href="" className="defaut-button2">
                        Comprar pelo Whatsapp
                      </a>

                      <a
                        href="mouse-razer-original"
                        className="defaut-button3 scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                      >
                        <span className="span-vertodos">Ver</span>
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card card2 margin-second-cards">
                  <img
                    src={Img6}
                    className="card-img-top imgcard"
                    alt="..."
                  ></img>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <h5 className="card-title">Deskpad Mr Robot</h5>
                      </div>

                      <div className="col-md-4">
                        <p className="price">
                          R$ 100,00{' '}
                          <i>
                            <BsCoin size={20} color={'#0582CA'} />
                          </i>
                        </p>
                      </div>
                    </div>

                    <p className="card-text pcard">
                      Adquira agora os melhores produtos da Feelz1337{' '}
                    </p>

                    <div>
                      <a href="" className="defaut-button2">
                        Comprar pelo Whatsapp
                      </a>

                      <a
                        href="deskpad-mr-robot"
                        className="defaut-button3 scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                      >
                        <span className="span-vertodos">Ver</span>
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Fim Cards */}
            </div>
          </div>
        </section>

        {/* <section className="section2">
          <div className="container margin-gadgets2">
            <div className="row">
              <div className="col-md-10">
                <h3 className="h3section2">Gadgets de cocina</h3>
                <p className="psection2">
                  Consiga agora os melhores produtos da Feelz1337
                </p>
              </div>

              <div className="col-md-2 ">
                <a
                  href="#about"
                  className="defaut-button scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span className="span-vertodos">Ver Todos</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="container margin-gadgets">
            <div className="row">
              <div className="col">
                <div>
                  <Cards />
                </div>
              </div>
              <div className="col">
                <div>
                  <Cards />
                </div>
              </div>
              <div className="col">
                <Cards />
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
};
