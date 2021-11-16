import Catalog from "../assets/components/Catalog";
import Hero from "../assets/components/Hero";
const Home = () => {
  console.log();

  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className="catalog">
        <Catalog />
      </div>
    </div>
  );
};

export default Home;
