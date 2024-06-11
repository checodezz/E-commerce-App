import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-3 bg-body-secondary mt-5">
      <footer className="text-center">
        <p>
          &copy; POMA.shop {new Date().getFullYear()}{" "}
          <Link
            to="https://github.com/checodezz/E-commerce-App"
            target="blank"
            className="github"
          >
            <Icon.Github size={20} />
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
