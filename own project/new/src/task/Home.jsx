import React, { useEffect, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/date.json")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setFilteredData(json);
      });
  }, []);

  const handleSearchChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = data.filter((item) => {
      const name = item.name?.toLowerCase() || "";
      const category = item.category?.toLowerCase() || "";
      return name.includes(value) || category.includes(value);
    });
    setFilteredData(filtered);
  };

  const handleAddToCart = (movie) => {
    setCart((prevCart) => [...prevCart, movie]);
    navigate("/cart", { state: { cart: [...cart, movie] } });
  };

  const handleSocialLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="he">
      <div className="head">
        <img src="/assest/Group (1).png" alt="pic" className="mb" />
        <span className="war">BOOK MY SHOW</span>
        <img src="/assest/download.jpg" alt="pi" className="mbd" />
      </div>

      <div>
        <h4>
          What <span className="kas">MOVIES</span> Would You Like
        </h4>
        <br />
      </div>

      <div>
        <input className="asd" type="text" placeholder="Find your movies"value={searchTerm}  onChange={handleSearchChange} />
      </div>

      <div className="mapped">
        {filteredData.length > 0 ? (
          filteredData.map((movie) => (
            <div key={movie.id} className="ima">
              <img src={movie.image} alt={movie.name} width={"60px"} />
              <h5>{movie.name}</h5>
              <p>Rating: {movie.rating}</p>
              <button onClick={() => handleAddToCart(movie)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>

  
      <footer className="footer">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            BookMyShow is your one-stop destination for booking movie tickets,
            events, and more.
          </p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@bookmyshow.com</p>
          <p>Phone: +91 12345 67890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <img src="/assest/download (5).jpg" alt="Facebook"  onClick={() => handleSocialLink("https://www.facebook.com")}
              className="social-icon"
            />
            <img
              src="/assest/download (6).jpg"
              alt="Instagram"
              onClick={() => handleSocialLink("https://www.instagram.com")}
              className="social-icon"
            />
            <img
              src="/assest/download (7).jpg"
              alt="Twitter"
              onClick={() => handleSocialLink("https://www.twitter.com")}
              className="social-icon"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
