import Header from "../components/Header";
const ProductListing = () => {
  return (
    <>
      <Header />
      <div className="row container">
        <div className="col-md-3">
          <div className="range-bar" style={{ width: "35%" }}>
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
              value="150"
              style={{ width: "100%" }}
            />
          </div>
          <br />
          <div className="category-checkbox">
            <h4>Category</h4>
            <input type="checkbox" name="category" value="men" />
            Men <br />
            <input type="checkbox" name="category" value="women" />
            Women <br />
            <input type="checkbox" name="category" value="kids" />
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
        <div className="col-md-9 bg-body-secondary"></div>
      </div>
    </>
  );
};

export default ProductListing;
