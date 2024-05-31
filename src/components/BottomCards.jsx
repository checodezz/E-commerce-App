import "bootstrap/dist/css/bootstrap.min.css";

const BottomCards = () => {
  return (
    <div className="px-5">
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card">
            <div className="row g-0">
              <div className="col-md-4 p-4">
                <img
                  src="https://placehold.co/200x200?text=Hello+World"
                  className="img-fluid"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="card">
            <div className="row g-0">
              <div className="col-md-4 p-4">
                <img
                  src="https://placehold.co/200x200?text=Hello+World"
                  className="img-fluid"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomCards;
