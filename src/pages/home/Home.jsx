import React from 'react';
import '../../styles/styles.css';
import Img1 from '../../assets/img1.png';
// import Logo from '../../assets/logo.png';
import { BsCoin, BsStar } from 'react-icons/bs';
import { Cards } from '../../components/Cards';
export const Home = () => {
  return (
    <>
      <main>
        <section className="section1 d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <h1 classNameName="h1section" data-aos="fade-up">
                  Los mejores gadgets de Octubre
                </h1>
                <h3
                  className="h3section"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  Consigue ahora los mejores productos de MyReleevant Store
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
                  Consigue ahora los mejores productos de MyReleevan Store
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
        </section>

        <section className="section2">
          <div className="container margin-gadgets2">
            <div className="row">
              <div className="col-md-10">
                <h3 className="h3section2">Gadgets de cocina</h3>
                <p className="psection2">
                  Consigue ahora los mejores productos de MyReleevan Store
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
        </section>
      </main>
    </>
  );
};
