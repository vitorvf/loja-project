import React, { useState } from 'react';
import {
  BsCoin,
  // BsDashLg,
  // BsPlusLg,
  BsSafe,
  BsChatText,
  BsFunnel,
  BsFlag,
  BsWifi,
  BsPlusLg,
} from 'react-icons/bs';
import '../../styles/styles.css';

import ProductImg from '../../assets/product-img.png';
import { Cards } from '../../components/Cards';
export const Produto = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="container margin-product">
          <div className="row">
            <div className="col">
              <img src={ProductImg} alt="" />
            </div>
            <div className="col">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Library</a>
                  </li>
                </ol>
              </nav>
              <h2>
                Origial ORICOMBI188NFW Essential Frigorífico Combi No Frost F
                Blanco
              </h2>

              <p>
                Saca el auténtico chef que llevas dentro y déjanos a nosotros
                ocuparnos de que tus alimentos estén frescos como el primer día.
              </p>

              <div className="col-md-4">
                <p className="price2">
                  450.99{' '}
                  <i>
                    <BsCoin size={20} color={'#0582CA'} />
                  </i>
                </p>
              </div>
              {/* Inicio Carrinho */}
              <div className="row">
                <div className="v-counter col-md-4 d-flex justify-content-center">
                  <input
                    type="button"
                    className="minusBtn"
                    value="-"
                    onClick={() => setCount(count - 1)}
                  />
                  <input
                    type="text"
                    size="25"
                    value={count}
                    className="count size-count"
                  />{' '}
                  <input
                    type="button"
                    onClick={() => setCount(count + 1)}
                    className="plusBtn"
                    value="+"
                  />
                </div>
                <div className="col-md-8 button-carrinho">
                  <a href=""> Comprar pelo Whatsapp</a>
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

            <div className="col-md-5">
              <h3>
                <BsChatText
                  size={48}
                  color={'#0582CA'}
                  className="margin-icon-opinions"
                />
                Opiniões (5)
              </h3>
            </div>
          </div>
        </div>
        <div className="container margin-info">
          <div className="row">
            <div className="col-md-7">
              <div>
                <div>
                  <p className="first-p">
                    Presentamos el frigorífico COOL&FREEZE 188 ESSENTIAL de la
                    marca <br /> Origial, tu elección ideal si quieres tener un
                    amplio espacio para <br /> almacenar tu compra semanal.
                    Olvídate de tener que ir a hacer la compra <br />{' '}
                    diariamente por no disponer de espacio en tu frigorífico.
                    Además, el <br /> frigorífico Origial de la serie
                    Cool&Freeze descongelará automáticamente <br /> la escarcha
                    generada gracias a su sistema Total No Frost.
                  </p>
                </div>
                <h2 className="h2-carac">Características do produto</h2>
                <div>
                  <p className="p-products">
                    <BsFunnel size={25} color={'#0582CA'} />
                    <span className="span-products">Gran capacidad.</span>{' '}
                    Gracias a su capacidad de 310 Litros, distribuidos en 224,4L
                    de <br></br>frigorífico y 85,6L en la parte del congelador,
                    almacenar y conservar tus alimentos <br></br> ya no supondrá
                    un problema. Aprovecha cada rincón de sus estanterías,
                    cajones y <br></br>balcones para sacar el mayor rendimiento
                    a tu frigorífico.
                  </p>
                </div>
              </div>

              <div>
                <p className="p-products">
                  {' '}
                  <span>
                    <BsFlag size={25} color={'#0582CA'} />
                  </span>
                  <span className="span-products">
                    {' '}
                    El frigorífico que se descongela solo.
                  </span>{' '}
                  Gracias a su tecnología Total No Frost, puedes <br />{' '}
                  olvidarte de tener que descongelar tu frigorífico manualmente.
                  A diferencia de los <br />
                  frigoríficos convencionales, los frigoríficos No Frost no
                  generan escarcha. <br /> Adicionalmente, tu frigorífico
                  siempre tendrá una temperatura constante y un <br />
                  reparto del frío homogéneo.
                </p>
              </div>

              <div>
                <p className="p-products">
                  <BsWifi size={25} color={'#0582CA'} />
                  <span className="span-products">
                    Display de temperatura interior.
                  </span>{' '}
                  Conoce a qué temperatura se encuentra el interior <br /> del
                  frigorífico en todo momento a través de su display LED de
                  temperatura ubicado <br /> en la parte superior del
                  frigorífico. Adapta la temperatura interior fácilmente a las{' '}
                  <br /> necesidades de cada momento. El desconocimiento será
                  parte del pasado.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <h3 className="h3-espe">Especificações</h3>
              <ul className="ulstyle">
                <li>Tipo Instalación Libre instalación</li>
                <li>Sistema Total No Frost</li>

                <li> Iluminación: Luz ECO LED interior</li>

                <li>Control electrónico táctil interior</li>

                <li> Clasificación energética F</li>

                <li>Cajón Veggie para fruta y verduras</li>

                <li>Función super freeze Capacidad total: 310 litros netos</li>

                <li>Capacidad frigorífico: 224,4 litros</li>

                <li>Capacidad congelador: 85,6</li>

                <li>litros Dimensiones (A x A x F): 1880 x 595 x 630 mm</li>

                <li>Nivel de ruido: 41 db</li>

                <li>Puertas reversibles</li>

                <li>Tiradores laterales integrados</li>

                <li>Consumo anual: 293 kW/año</li>

                <li>4 estrellas de congelación</li>

                <li> Clase SN-T Color: Blanco</li>
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
                  Os compradores também compram esses produtos
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
