import React, { useState } from 'react';

export default function Carousal() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
        <div className="carousel-inner" id='carousel'>

          <div className="carousel-item active">
            <img src="/Burger3.avif" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/pannertikka.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/pizza.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
          </div>

          {/* Search bar at the bottom with hover effect */}
          <div className="carousel-caption d-flex justify-content-center" style={{ bottom: '20px', zIndex: '10' }}>
            <form className="d-flex w-100">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search for food..."
                aria-label="Search"
                style={{ fontSize: '1.1rem', padding: '0.5rem' }}
              />
              <button
                type="submit"
                className="btn"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  border: '2px solid #28a745',
                  backgroundColor: isHovered ? '#28a745' : 'transparent',
                  color: isHovered ? 'white' : '#28a745',
                  transition: 'all 0.3s ease',
                  fontWeight: 'bold',
                }}
              >
                Search
              </button>
            </form>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
