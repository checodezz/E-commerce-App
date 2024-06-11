import { useEffect, useState } from "react";
import Header from "../components/Header";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

const ProductListing = () => {
  const { category } = useParams();
  const { error, loading, data } = useFetch(
    "https://2893f49e-66c4-47fd-b2d7-386daade1163-00-zy5okukksf4t.sisko.replit.dev/products"
  );

  const [listOfProducts, setListOfProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceFilter, setPriceFilter] = useState(100);
  const [ratingFilter, setRatingFilter] = useState();
  const [sortType, setSortType] = useState();

  useEffect(() => {
    if (data && data.products.length > 0) {
      setListOfProducts(data.products);
      setFilteredProducts(data.products);
    }
  }, [data]);

  useEffect(() => {
    filterProducts();
  }, [selectedCategories, priceFilter, ratingFilter, sortType]);

  useEffect(() => {
    if (category === "all") {
      setSelectedCategories(["men", "women", "kids"]);
    } else if (category) {
      setSelectedCategories([category]);
    }
  }, [listOfProducts]);

  const handleRangeBar = (event) => {
    const { value } = event.target;
    setPriceFilter(parseInt(value));
  };

  const handleCheckbox = (e) => {
    const { checked, value } = e.target;
    checked
      ? setSelectedCategories((prevVal) => [...prevVal, value])
      : setSelectedCategories((prevVal) =>
          prevVal.filter((categories) => categories !== value)
        );
  };

  const handleRatingChange = (e) => {
    const { value } = e.target;
    setRatingFilter(parseInt(value));
  };

  const handleSort = (e) => {
    setSortType(e.target.value);
  };

  const filterProducts = () => {
    let filtered = [...listOfProducts];

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) => {
        return selectedCategories.includes(product.category.toLowerCase());
      });
    }

    if (priceFilter > 0) {
      filtered = filtered.filter((product) => product.price >= priceFilter);
    }

    if (ratingFilter > 0) {
      filtered = filtered.filter((product) => product.rating >= ratingFilter);
    }

    if (sortType === "low") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortType === "high") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  };

  const clearFilters = () => {
    setSelectedCategories(["men", "women", "kids"]);
    setPriceFilter(100);
    setRatingFilter(undefined);
    setSortType(undefined);
    setFilteredProducts(listOfProducts);
  };

  if (loading) {
    return (
      <div className="spinner-wrapper">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="p-4">
        <div className="row">
          <div
            className="col-md-3 px-4 py-3 bg-body-secondary rounded"
            style={{ position: "sticky", top: "10px", height: "90vh" }}
          >
            <p>
              <strong className="fw-semibold">Filters</strong>
              <span
                className="float-end"
                onClick={clearFilters}
                style={{ cursor: "pointer" }}
              >
                Clear
              </span>
            </p>
            <h4>Price Range</h4>
            <div className="range-bar pt-2" style={{ width: "100%" }}>
              <div className="range-label d-flex justify-content-between font-monospace">
                <span>100</span>
                <span>150</span>
                <span>200</span>
              </div>
              <input
                type="range"
                min="100"
                max="200"
                value={priceFilter}
                style={{ width: "100%", background: "#ddd" }}
                onChange={handleRangeBar}
              />
            </div>
            <br />
            <div className="category-checkbox">
              <h4>Category</h4>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="category"
                  value="men"
                  id="men"
                  checked={selectedCategories.includes("men")}
                  onChange={handleCheckbox}
                />
                <label
                  className="form-check-label font-monospace"
                  htmlFor="men"
                >
                  Men
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="category"
                  value="women"
                  id="women"
                  checked={selectedCategories.includes("women")}
                  onChange={handleCheckbox}
                />
                <label
                  className="form-check-label font-monospace"
                  htmlFor="women"
                >
                  Women
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="category"
                  value="kids"
                  id="kids"
                  checked={selectedCategories.includes("kids")}
                  onChange={handleCheckbox}
                />
                <label
                  className="form-check-label font-monospace"
                  htmlFor="kids"
                >
                  Kids
                </label>
              </div>
            </div>
            <br />
            <div className="rating pb-4">
              <h4>Rating</h4>
              <div className="form-check">
                <label className="form-check-label font-monospace">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="rating"
                    value="4"
                    checked={ratingFilter === 4}
                    onChange={handleRatingChange}
                  />
                  4 Stars & above
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label font-monospace">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="rating"
                    value="3"
                    checked={ratingFilter === 3}
                    onChange={handleRatingChange}
                  />
                  3 Stars & above
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label font-monospace">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="rating"
                    value="2"
                    checked={ratingFilter === 2}
                    onChange={handleRatingChange}
                  />
                  2 Stars & above
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label font-monospace">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="rating"
                    value="1"
                    checked={ratingFilter === 1}
                    onChange={handleRatingChange}
                  />
                  1 Stars & above
                </label>
              </div>
            </div>
            <div className="sort">
              <h4>Sort by</h4>
              <div className="form-check">
                <label className="form-check-label font-monospace">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="sort"
                    value="low"
                    checked={sortType === "low"}
                    onClick={handleSort}
                  />
                  Price - Low to High
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label font-monospace">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="sort"
                    value="high"
                    checked={sortType === "high"}
                    onClick={handleSort}
                  />
                  Price - High to Low
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row">
              {filteredProducts?.map((product) => (
                <div className="col-md-3 mb-4" key={product._id}>
                  <div className="card h-100">
                    <img
                      src={product.productImage}
                      alt={product.name}
                      className="card-img-top"
                      style={{ objectFit: "cover", height: "200px" }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{product.name}</h5>
                      <h6 className="card-title pt-2">
                        <span
                          style={{
                            background: "green",
                            borderRadius: "10%",
                            padding: "2px",
                            color: "white",
                          }}
                        >
                          {product.rating}⭐
                        </span>
                      </h6>
                      <p className="card-text m-0" style={{ color: "grey" }}>
                        {product.category}
                      </p>
                      <p className="card-text fs-5">
                        ${product.price} /
                        {product.discount && (
                          <span
                            className="fs-6 "
                            style={{
                              color: "red",
                              padding: "2px",
                            }}
                          >
                            {" "}
                            {product.discount}% off
                          </span>
                        )}
                      </p>
                      <button className="btn btn-outline-primary mt-auto">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductListing;
