import React from 'react';
import Img1 from '@assets/img1.png';
import { BsCoin, BsStar } from 'react-icons/bs';
export const Cards = () => {
  return (
    <>
      <div>
        <div className="card card2">
          <img src={Img1} className="card-img-top imgcard" alt="..."></img>
          <div className="card-body">
            <div className="row">
              <div className="col-md-8">
                <h5 className="card-title">Gadgets de cocina</h5>
              </div>

              <div className="col-md-4">
                <p className="price">
                  450.99{' '}
                  <i>
                    <BsCoin size={20} color={'#0582CA'} />
                  </i>
                </p>
              </div>
            </div>

            <div className="stars">
              <BsStar size={18} color={'#0582CA'} />
              <BsStar size={18} color={'#0582CA'} />
              <BsStar size={18} color={'#0582CA'} />
              <BsStar size={18} color={'#8D9FA8'} />
              <BsStar size={18} color={'#8D9FA8'} />
            </div>

            <p className="card-text pcard">
              Consigue ahora los mejores productos de MyReleevan Store
            </p>

            <div>
              <a href="#" className="defaut-button2">
                Comprar pelo Whatsapp
              </a>

              <a
                href="#about"
                className="defaut-button3 scrollto d-inline-flex align-items-center justify-content-center align-self-center"
              >
                <span className="span-vertodos">Ver</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
