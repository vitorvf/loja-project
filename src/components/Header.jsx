import React from 'react';
import '../styles/styles.css';

import { BsSearch, BsCart3 } from 'react-icons/bs';
import Logo from '@assets/logo.png';
export const Header = () => {
  return (
    <>
      <header>
        <div className="container margin-header">
          <div className="row">
            <div className="col-md-3">
              <a href="index.html" className="logo d-flex align-items-center">
                <img src={Logo} alt=""></img>
              </a>
            </div>

            <div className="col-md-7">
              <div className="box">
                <input
                  className="placeholder-text"
                  placeholder="Buscar Produto"
                  type="text"
                  name=""
                ></input>
                <BsSearch size={18} color={'#8D9FA8'} />
              </div>
            </div>

            <div className="col-md-2">
              <a
                href="#about"
                className="defaut-button scrollto d-inline-flex align-items-center justify-content-center align-self-center"
              >
                <i className="cart-icon">
                  <BsCart3 size={18} color={'#8D9FA8'} />
                </i>
                <span className="span-vertodos">Carrinho</span>
              </a>
            </div>
          </div>
        </div>

        <div className="container mynav">
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse color-ul"
                id="navbarText"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                      Todos os produtos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Sobre
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Contato
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Gadgets
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Ofertas
                    </a>
                  </li>
                </ul>

                <ul className="navbar-nav secongnav-margin mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active active"
                      aria-current="page"
                      href="#"
                    >
                      Meus Pedidos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
