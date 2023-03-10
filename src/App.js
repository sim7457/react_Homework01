import Footer from "./pages/Footer";
import Header from "./pages/Header";
import HIGHLIGHTS from "./pages/HIGHLIGHTS";
import INSTAGRAM from "./pages/INSTAGRAM";
import Slide from "./pages/MainSlide";
import Static_parbase from "./pages/Static_parbase";

const App = () => {
  return (
    <>
      <Header />
      <Slide />
      <HIGHLIGHTS />
      <Static_parbase />
      <INSTAGRAM />
      <Footer />
    </>
  );
};

export default App;
