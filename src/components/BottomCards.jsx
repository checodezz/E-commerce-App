// import "bootstrap/dist/css/bootstrap.min.css";

const BottomCards = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide container"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner rounded">
        <div className="carousel-item active">
          <img
            src="https://media.fashionnetwork.com/m/9bbd/9239/870e/e447/99b3/8373/ab91/11fa/889e/3896/3896.jpeg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://marketplace.canva.com/EAFVHstxnwk/1/0/1600w/canva-beige-aesthetic-exclusive-fashion-wear-collection-clothing-banner-BZb4KkCdNP0.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.pinimg.com/originals/d0/78/70/d078705c172a131d88c67bd19986172d.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default BottomCards;
