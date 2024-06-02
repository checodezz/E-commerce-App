import Header from "../components/Header";
const ProductListing = () => {
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-md-4" style={{ background: "grey" }}>
          Filters
          <input type="range" min="100" max="200" value="150" />
        </div>
        <div className="col-md-8">bbwsfe</div>
      </div>
    </>
  );
};

export default ProductListing;
