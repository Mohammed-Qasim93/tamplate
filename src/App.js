import Carosul from "./components/carosul/Carosul";
import Login from "./components/form/Login";
import Signup from "./components/form/Signup";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="z-40">
      <NavBar />

      <div
        style={{ height: "81vh" }}
        className=" flex flex-col p-16 md:space-y-3 space-y-8 justify-between items-center "
      >
        <Carosul />
      </div>

      <div className="">
        <Login />
      </div>

      <div className="">
        <Signup />
      </div>

      <Footer />
    </div>
  );
}

export default App;
