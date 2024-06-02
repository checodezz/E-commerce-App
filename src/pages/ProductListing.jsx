import Header from "../components/Header";
const ProductListing = () => {
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-md-4">
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
          <div className="col-md-8">bbwsfe</div>
        </div>
      </div>
    </>
  );
};

export default ProductListing;
