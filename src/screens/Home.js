import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/card";

export default function Home() {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !important" }}
        >
          <div className="carousel-inner" id="carousel">
            <div className="carousel-item active">
              <img
                src="/Burger3.avif"
                className="d-block w-100"
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/samosa.jpg"
                className="d-block w-100"
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/pizz.jpg"
                className="d-block w-100"
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>

            <div className="carousel-item">
              <img
                src="/thali.webp"
                className="d-block w-100"
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>

            <div className="carousel-item">
              <img
                src="/idlidosa.jpg"
                className="d-block w-100"
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>

            <div className="carousel-item">
              <img
                src="/fries.jpg"
                className="d-block w-100"
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>

            <div className="carousel-item">
              <img
                src="/indiancusine.jpg"
                className="d-block w-100"
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>


            {/* Carousel arrows */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>

            {/* Search bar */}
            <div
              className="carousel-caption d-flex justify-content-center"
              style={{ bottom: "20px", zIndex: "10" }}
            >
              <div className="d-flex justify-content-center w-100">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search for food..."
                  aria-label="Search"
                  style={{ fontSize: "1.1rem", padding: "0.5rem" }}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {foodCat.length !== 0
          ? foodCat.map((data) => {
              return (
                <div className="row mb-3" key={data._id}>
                  <div className="fs-3 fw-bold m-3">{data.CategoryName}</div>
                  <hr />
                  {foodItem.length !== 0 ? (
                    foodItem
                      .filter(
                        (item) =>
                          item.CategoryName === data.CategoryName &&
                          item.name.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((filterItems) => {
                        return (
                          <div
                            key={filterItems._id}
                            className="col-12 col-md-6 col-lg-3"
                          >
                            <Card foodItem={filterItems}
                              options={filterItems.options[0]}
                              
                            ></Card>
                          </div>
                        );
                      })
                  ) : (
                    <div>No such Data Found</div>
                  )}
                </div>
              );
            })
          : ""}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
