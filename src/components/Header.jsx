import * as Icon from "react-bootstrap-icons";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand pe-5" href="#">
          MyShoppingSite
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <div className="ps-5 ms-5">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item container mx-2">
              <button
                className="btn btn-secondary"
                style={{ borderRadius: "0", width: "120px" }}
              >
                Login
              </button>
            </li>
            <li className="nav-item container position-relative mx-2 my-2">
              <Icon.Heart size={25} />
              <span className="position-absolute top-0 start-99 translate-middle badge rounded-pill bg-danger">
                0
              </span>
            </li>
            <li className="nav-item container position-relative mx-2 my-2 ">
              <Icon.Cart3 size={25} />
              {/* <span>Cart</span> */}
              <span className="position-absolute top-0 start-99 translate-middle badge rounded-pill bg-danger">
                0
              </span>
            </li>
            <li className="my-2">Cart</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
