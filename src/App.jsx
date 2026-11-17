import Navbar from "./companents/Navbar";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Main2 from "./pages/Main2";
import Main3 from "./pages/Main3";
import Main4 from "./pages/Main4";

function App() {
  return (
    <div className="w-full h-auto bg-[#FFFFFF] overflow-hidden">
      <Navbar />
      <Header />
      <Main />
      <Main2 />
      <Main3 />
      <Main4 />
      <Footer />
    </div>
  );
}
export default App;
