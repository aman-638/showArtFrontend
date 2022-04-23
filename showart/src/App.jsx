
import Footer from "./components/Footer";
import { Navbar } from "./components/Home/Navbar";
import { Router } from "./components/Router";


function App() {
  return (
    <div className="App" style={{"backgroundImage":"linear-gradient(315deg, #485461 0%, #28313b 74%)"}}>
      <Navbar/>
       <Router/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
