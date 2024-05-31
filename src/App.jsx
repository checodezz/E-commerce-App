import "./App.css";
import Header from "./components/Header";
import Categories from "./components/Categories";
import CarouselCust from "./components/CarouselCust";
import BottomCards from "./components/BottomCards";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Categories />
        <CarouselCust />
        <BottomCards />
      </main>
    </>
  );
}

export default App;
