import { useEffect, useState } from "react";
import Header from "../components/Header";
import useFetch from "../useFetch";

const ProductListing = () => {
  const { error, loading, data } = useFetch(
    "https://2893f49e-66c4-47fd-b2d7-386daade1163-00-zy5okukksf4t.sisko.replit.dev/products"
  );

  const [listOfProducts, setListOfProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  useEffect(() => {
    if (data && data.products.length > 0) {
      setListOfProducts(data.products);
      setFilteredProducts(data.products);
    }
  }, [data]);

  useEffect(() => {
    filterProducts();
  }, [selectedCategories]);

  const handleRangeBar = (event) => {
    const { value } = event.target;
    setFilteredProducts(
      listOfProducts.filter((product) => product.price >= parseInt(value))
    );
  };

  const handleCheckbox = (e) => {
    const { checked, value } = e.target;
    checked
      ? setSelectedCategories((prevVal) => [...prevVal, value])
      : setSelectedCategories((prevVal) =>
          prevVal.filter((categories) => categories != value)
        );
  };

  // const filterProducts = () => {
  //   let filtered = [...listOfProducts];
  //   if (selectedCategories.length > 0) {
  //     filtered = filtered.filter((product) =>
  //       selectedCategories.includes(product.category)
  //     );
  //   }
  //   console.log(filtered);
  //   setFilteredProducts(filtered);
  // };

  const filterProducts = () => {
    let filtered = [...listOfProducts];

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) => {
        console.log("Checking product:", product.category);
        console.log("Selected categories:", selectedCategories);
        return selectedCategories.includes(product.category.toLowerCase());
      });
    }

    console.log("Filtered products:", filtered);
    setFilteredProducts(filtered);
  };

  console.log(listOfProducts);
  // console.log(filteredProducts);

  return (
    <>
      <Header />
      <div className="p-4">
        <div className="row">
          <div
            className="col-md-3 px-4 py-3 bg-body-secondary rounded"
            style={{ position: "sticky", top: "30px", height: "90vh" }}
          >
            <div className="range-bar" style={{ width: "100%" }}>
              Filters <br />
              <div className="range-label d-flex justify-content-between">
                <span>100</span>
                <span>150</span>
                <span>200</span>
              </div>
              <input
                type="range"
                min="100"
                max="200"
                style={{ width: "100%" }}
                onChange={handleRangeBar}
              />
            </div>
            <br />
            <div className="category-checkbox">
              <h4>Category</h4>
              <input
                type="checkbox"
                name="category"
                value="men"
                onChange={handleCheckbox}
              />
              Men <br />
              <input
                type="checkbox"
                name="category"
                value="women"
                onChange={handleCheckbox}
              />
              Women <br />
              <input
                type="checkbox"
                name="category"
                value="kids"
                onChange={handleCheckbox}
              />
              Kids
            </div>
            <br />
            <div className="rating">
              <h4>Rating</h4>
              <input type="radio" name="rating" value="4" /> 4 stars & above{" "}
              <br />
              <input type="radio" name="rating" value="3" /> 3 stars & above{" "}
              <br />
              <input type="radio" name="rating" value="2" /> 2 stars & above{" "}
              <br />
              <input type="radio" name="rating" value="1" /> 1 stars & above{" "}
              <br />
            </div>
            <div className="sort">
              <h4>Sort by</h4>
              <input type="radio" name="sort" value="low" />
              Price - Low to High <br />
              <input type="radio" name="sort" value="high" />
              Price - High to Low
              <br />
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
                      <p className="card-text">{product.category}</p>
                      <h5 className="card-text">${product.price}</h5>
                      <button className="btn btn-secondary mt-auto">
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
    </>
  );
};

export default ProductListing;
