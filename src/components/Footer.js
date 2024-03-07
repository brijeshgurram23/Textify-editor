import React from 'react';
import './Footer.css'

export default function Footer() {
  return (
    <div>
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a className="btn btn-outline-light btn-floating m-1" href="https://instagram.com/brijeshgurram23" role="button">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/brijesh-gurram-04727a230" role="button">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/brijeshgurram23" role="button">
              <i className="fab fa-github"></i>
            </a>
            <a className="btn btn-outline-light btn-floating m-1" href="https://mailto:brijeshgurram910@gmail.com" role="button">
              <i className="fas fa-envelope"></i>
            </a>
          </section>
        </div>
        <div className="text-center p-3" style={{backgroundColor: "rgba(0, 11, 545, 0.2)"}}>
          © 2024 Copyright Brijesh Gurram
        </div>
      </footer>
    </div>
  );
}
