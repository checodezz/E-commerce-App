import "./App.css";
import Header from "./components/Header";
import Categories from "./components/Categories";
import CarouselCust from "./components/CarouselCust";
import BottomCards from "./components/BottomCards";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

function App() {
  return (
    <>
      <Header />
      <CarouselCust />
      <Categories />
      <BottomCards />
      <Footer />
    </>
  );
}

export default App;
