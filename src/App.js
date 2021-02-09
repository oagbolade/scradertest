import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/App.css";
import "../src/styles/starRating.css";
import React, { useState, useEffect } from "react";
import { fetchProducts } from "./actions/actions";
import { useSelector, useDispatch } from "react-redux";
import Items from "./components/Items";
import ArticleSection from "./components/ArticleSection";
import LoadingSpinner from "./components/Loading";

function App() {
  const [getProducts, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();
  let items = null;

  useEffect(() => {
    dispatch(fetchProducts());
    if (products.result && products.result.length > 0) {
      setProducts(products.result);
      setLoading(false);
    }
  }, [getProducts, products]);

  if (!isLoading) {
    items = getProducts.map((product) => {
      return (
        <Items
          image={product.productImage}
          storeName={product.merchant.name}
          itemName={product.name}
          itemPrice={product.selling_price}
        />
      );
    });
  }

  return (
    <div className="container">
      <h3 className="text-center">Scrader Frontend Test</h3>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <h6>We provide the best shopping experience!</h6>
          <div className="logo-section">
            <img
              className="logo"
              src="https://res.cloudinary.com/oladayoagbolade/image/upload/v1612861370/d0ap26yuevw6l6f3hjkz.jpg"
              alt="Failed to load"
            />
            Acme. Stores
          </div>
          <div>
            <div className="card-deck">{items}</div>
          </div>

          <div>
            <ArticleSection />
            <div>
              <h3>Similar Items</h3>
            </div>
            <div>
              <div className="card-deck similar-items-deck">{items}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
