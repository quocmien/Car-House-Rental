import Footer from "../_components/footer";
import Heroes from "../_components/heroes";

const HomePage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start flex-1 pb-10">
        <Heroes />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
