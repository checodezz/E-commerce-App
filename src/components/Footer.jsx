const Footer = () => {
  return (
    <div className="py-3 bg-body-secondary mt-5">
      <footer className="text-center">
        <p>
          &copy; POMA.shop {new Date().getFullYear()} No rights reserved.{" "}
          <a href="https://github.com/checodezz/E-commerce-App" target="blank">
            Github
          </a>{" "}
        </p>
      </footer>
    </div>
  );
};

export default Footer;
