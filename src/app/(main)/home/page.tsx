import Heroes from "../_components/heroes";

const HomePage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div>
        <Heroes />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
