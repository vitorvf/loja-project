import React, { useState } from 'react';
import {
  BsCoin,
  BsSafe,
  BsChatText,
  BsFunnel,
  BsFlag,
  BsWifi,
  BsChevronRight,
  BsChevronLeft,
} from 'react-icons/bs';

import '../../styles/styles.css';

import ProductImg from '../../assets/caixa-som/caixa1.jpeg';
import ProductImg2 from '../../assets/caixa-som/caixa2.jpeg';
import ProductImg3 from '../../assets/caixa-som/caixa3.jpeg';
import ProductImg4 from '../../assets/caixa-som/caixa4.jpeg';
import ProductImg5 from '../../assets/caixa-som/caixa5.jpeg';

import { Cards } from '../../components/Cards';
export const Caixasom = () => {
  const [count, setCount] = useState(0);
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

                  <div className="carousel-item">
                    <img
                      src={ProductImg4}
                      className="d-block w-100"
                      alt="..."
                    ></img>
                  </div>

                  <div className="carousel-item">
                    <img
                      src={ProductImg5}
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
                    <a href="/">In??cio</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    JBL Flip
                  </li>
                </ol>
              </nav>
              <h2>JBL Flip</h2>

              <div className="col-md-8">
                <p className="p-products">
                  O JBL Flip 4 ?? uma caixa de som port??til com Bluetooth que
                  oferece um som est??reo surpreendentemente poderoso. Esta caixa
                  de som compacta ?? alimentada por uma bateria recarreg??vel e
                  oferece ??udio de alta qualidade.
                </p>
              </div>

              <div className="col-md-4">
                <p className="price2">
                  R$ 400,00{' '}
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
                Caracter??sticas
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
                    O JBL Flip 4 ?? a ??ltima gera????o da premiada s??rie Flip, uma
                    caixa de som port??til com Bluetooth que oferece um som
                    est??reo surpreendentemente poderoso. Esta caixa de som
                    compacta ?? alimentada por uma bateria de ??ons de l??tio
                    recarreg??vel de 3.000 mAh, que oferece 12 horas cont??nuas de
                    ??udio de alta qualidade.
                  </p>
                </div>
                <h2 className="h2-carac">Caracter??sticas do produto</h2>
              </div>

              <div>
                <ul className="ulstyle">
                  <li>Transmiss??o sem fio via Bluetooth</li>
                  <li>At?? 12 horas de reprodu????o</li>

                  <li>Classifica????o IPX7 ?? prova d?????gua</li>

                  <li>JBL Connect+</li>

                  <li>Viva-voz</li>

                  <li>Integra????o com assistente de voz</li>

                  <li>Materiais para o seu estilo de vida</li>

                  <li>Radiador de graves JBL</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <h3 className="h3-espe">Especifica????es</h3>
              <ul className="ulstyle">
                <li>Lan??amento no Brasil: junho de 2017</li>
                <li>Dimens??es: 6,8 x 17,5 x 7,0 cm</li>

                <li>Bateria: 3.000 mAh (12 horas de ??udio)</li>

                <li>Peso: 515 g</li>

                <li>Resposta em frequ??ncia: 70 H</li>

                <li>Vers??o do Bluetooth: 4.2</li>

                <li>Pot??ncia nominal de entrada: 2 x 8W RMS</li>

                <li>Rela????o sinal/ru??do: maior ou igual a 80 dB</li>

                <li>Extras: Connect+ e certifica????o IPX7</li>
                {/* 
                <li>litros Dimensiones (A x A x F): 1880 x 595 x 630 mm</li>

                <li>Nivel de ruido: 41 db</li>

                <li>Puertas reversibles</li>

                <li>Tiradores laterales integrados</li>

                <li>Consumo anual: 293 kW/a??o</li>

                <li>4 estrellas de congelaci??n</li>

                <li> Clase SN-T Color: Blanco</li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="">
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-10">
                <h3 className="h3section2">Produtos relacionados</h3>
                <p className="psection2">
                  Os compradores tamb??m compram esses produtos
                </p>
              </div>

              <div className="col-md-2 "></div>
            </div>
          </div>

          <div className="container margin-gadgets">
            <div className="row">
              <div className="col">
                <Cards />
              </div>
              <div className="col">
                <Cards />
              </div>
              <div className="col">
                <Cards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
