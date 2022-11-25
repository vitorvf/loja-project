import React, { useState } from 'react';
import { BsCoin, BsSafe, BsChevronRight, BsChevronLeft } from 'react-icons/bs';

import '../../styles/styles.css';

import ProductImg from '@assets/mouse/mouse1.jpeg';
import ProductImg2 from '@assets/mouse/mouse2.jpeg';
import ProductImg3 from '@assets/mouse/mouse3.jpeg';

import Img1 from '@assets/bone-mr-robot/mrrobot-bone.jpeg';
import Img2 from '@assets/caixa-som/caixa3.jpeg';
import Img3 from '@assets/celular/celular1.jpeg';
import Img4 from '@assets/Kali/kali1.png';
import Img5 from '@assets/mousepad-robot/robot4.jpeg';
import Img6 from '@assets/mousepad-hellofriends/hellofriends1.jpeg';

export const Mouse = () => {
  return (
    <>
      <div>
        <div className="container margin-product">
          <div className="row">
            <div className="col">
              <div
                id="carouselExampleControlsNoTouching"
                className="carousel slide"
                data-bs-touch="false"
                data-bs-interval="false"
              >
                <div className="carousel-inner border-new">
                  <div className="carousel-item active">
                    <img
                      src={ProductImg}
                      className="d-block w-100"
                      alt="..."
                    ></img>
                  </div>
                  <div className="carousel-item">
                    <img
                      src={ProductImg2}
                      className="d-block w-100"
                      alt="..."
                    ></img>
                  </div>

                  <div className="carousel-item">
                    <img
                      src={ProductImg3}
                      className="d-block w-100"
                      alt="..."
                    ></img>
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="prev"
                >
                  <span className="" aria-hidden="true">
                    <BsChevronLeft size={32} color={'#00A6FB'} />
                  </span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="next"
                >
                  <span className="" aria-hidden="true">
                    <BsChevronRight size={32} color={'#00A6FB'} />
                  </span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Início</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Mouse Razer Original
                  </li>
                </ol>
              </nav>
              <h2>Mouse Razer Original </h2>

              <div className="col-md-8">
                <p className="p-products">
                  O produto conta com os botões direito, esquerdo e scroll –
                  portanto, não traz comandos extras. Além disso, ele não é
                  emborrachado nas laterais. O mouse está disponível por volta
                  de R$ 200, mas é difícil encontrá-lo em estoque.
                </p>
              </div>

              <div className="col-md-4">
                <p className="price2">
                  R$ 230,00{' '}
                  <i>
                    <BsCoin
                      size={24}
                      color={'#0582CA'}
                      className="margin-price"
                    />
                  </i>
                </p>
              </div>
              {/* Inicio Carrinho */}
              <div className="row position-mobile">
                <div className="col-md-8 button-carrinho">
                  <a href="">Comprar pelo Whatsapp</a>
                </div>
              </div>
              {/* Fim Adicionar Carrinho */}
            </div>
          </div>
        </div>

        <div className="container margin-opinions ">
          <div className="row justify-content-md-center">
            <div className="col-md-7">
              <h3>
                <BsSafe
                  size={48}
                  color={'#0582CA'}
                  className="margin-icon-opinions"
                />
                Características
              </h3>
            </div>

            <div className="col-md-5"></div>
          </div>
        </div>
        <div className="container margin-info">
          <div className="row">
            <div className="col-md-7">
              <div>
                <div>
                  <p className="first-p col-md-11">
                    O Razer DeathAdder é um dos mouses mais populares do
                    universo gamer. O modelo, com lançamento em 2006, traz como
                    principal característica o design ergonômico. O produto foi
                    criado para proporcionar conforto mesmo após longas horas de
                    uso. Para isso, o aparelho conta com uma superfície ampla
                    que tende a oferecer uma ótima pegada – sendo indicado
                    principalmente para aqueles usuários com Palm Grip.
                  </p>
                </div>
                <h2 className="h2-carac">Características do produto</h2>
              </div>

              <div className="col-md-5">
                <h3 className="h3-espe">Especificações</h3>
                <ul className="ulstyle">
                  <li>Altíssima resolução: até 6.400dpi.</li>
                  <li>Extremamente rápido: até 200"/s e 50g.</li>

                  <li>Sensor óptico 4G.</li>

                  <li>Iluminação verde.</li>

                  <li> Clasificación energética F</li>

                  <li>5 botões programáveis.</li>

                  <li>Interface USB.</li>

                  <li>Conector USB banhado em ouro.</li>

                  <li>Botões grandes anti-deslizantes.</li>

                  <li>Ergonomia para destros.</li>

                  <li>Nivel de ruido: 41 db</li>

                  <li>Puertas reversibles</li>

                  <li>Always-on.</li>

                  <li>Scroll vertical.</li>

                  <li>Ultrapolling de 1MHz (Resposta de 1ms)..</li>

                  <li>Sensibilidade ajustável.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-10">
                <h3 className="h3section2">Produtos relacionados</h3>
                <p className="psection2">
                  Os compradores também compram esses produtos
                </p>
              </div>

              <div className="col-md-2 "></div>
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
                        <h5 className="card-title">Mousepad Mr Robot</h5>
                      </div>

                      <div className="col-md-4">
                        <p className="price">
                          40,00{' '}
                          <i>
                            <BsCoin size={20} color={'#0582CA'} />
                          </i>
                        </p>
                      </div>
                    </div>

                    <p className="card-text pcard">
                      Adquira agora os melhores produtos da Feelz1337 Store{' '}
                    </p>

                    <div>
                      <a href="" className="defaut-button2">
                        Comprar pelo Whatsapp
                      </a>

                      <a
                        href="mousepad-mr-robot"
                        className="defaut-button3 scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                      >
                        <span className="span-vertodos">Ver</span>
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
            </div>
            {/* Fim Cards */}
          </div>
        </div>
      </div>
    </>
  );
};
