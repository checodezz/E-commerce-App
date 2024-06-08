import { Link } from "react-router-dom";

const Categories = () => {
  const categoryWithImages = [
    {
      title: "All",
      image:
        "https://www.shutterstock.com/image-photo/happy-latin-father-holding-arms-260nw-1415638652.jpg",
    },
    {
      title: "Men",
      image:
        "https://img.freepik.com/free-photo/excited-man-holding-shopping-bags-looking-happy-mobile-phone-screen-standing-yellow-background_1258-73660.jpg",
    },
    {
      title: "Women",
      image:
        "https://cdn.create.vista.com/api/media/small/505248028/stock-photo-fashionable-woman-in-red-dress-going-shopping-holding-bags-and-showing-thumbs-up-recommend-store",
    },
    {
      title: "Kids",
      image:
        "https://img.freepik.com/free-photo/cute-little-girl-shopping_624325-3892.jpg",
    },
    {
      title: "Grocery",
      image: "https://thumbs.dreamstime.com/b/groceries-23958998.jpg",
    },
  ];

  return (
    <div className=" my-5 container">
      <div className="row justify-content-evenly">
        {categoryWithImages.map((category) => (
          <div key={category.title} className="col-md-2 mx-2">
            <div className="card">
              <img src={category.image} alt={category.title} />
              <div className="card-img-overlay d-flex align-items-center justify-content-center">
                <h5>
                  <Link
                    to={`/productlisting/${category.title.toLowerCase()}`}
                    className="category-link"
                  >
                    {category.title}
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
