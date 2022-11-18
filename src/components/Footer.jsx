import React from 'react';
import Logo from '../assets/logo.png';
import { BsChevronRight } from 'react-icons/bs';
export const Footer = () => {
  return (
    <>
      <footer id="footer" class="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row gy-4">
              <div class="col-lg-5 col-md-12 footer-info">
                <a href="index.html" class="logo d-flex align-items-center">
                  <img src={Logo} alt=""></img>
                </a>
                <p>
                  Cras fermentum odio eu feugiat lide par naso tierra. Justo
                  eget nada terra videa magna derita valies darta donna mare
                  fermentum iaculis eu non diam phasellus.
                </p>
                <div class="social-links mt-3">
                  <a href="#" class="twitter">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a href="#" class="facebook">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="#" class="instagram">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="#" class="linkedin">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <BsChevronRight size={15} /> <a href="#">Home</a>
                  </li>
                  <li>
                    <BsChevronRight size={15} /> <a href="#">About us</a>
                  </li>
                  <li>
                    <BsChevronRight size={15} /> <a href="#">Services</a>
                  </li>
                  <li>
                    <BsChevronRight size={15} />{' '}
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <BsChevronRight size={15} /> <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-2 col-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <BsChevronRight size={15} />
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <BsChevronRight size={15} />
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <BsChevronRight size={15} />
                    <a href="#">Product Management</a>
                  </li>
                  <li>
                    <BsChevronRight size={15} />
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <BsChevronRight size={15} />
                    <a href="#">Graphic Design</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start text-contact">
                <h4>Contact Us</h4>
                <p>
                  A108 Adam Street <br></br>
                  New York, NY 535022<br></br>
                  United States <br></br>
                  <br></br>
                  <strong>Phone:</strong> +1 5589 55488 55<br></br>
                  <strong>Email:</strong> info@example.com<br></br>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="copyright">
            &copy; Copyright{' '}
            <strong>
              <span>Loja</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
};
