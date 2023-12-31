import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Hotel from "./pages/Hotel/Hotel"
import List from "./pages/List/List"
import Login from "./pages/Login/Login"
import Registration from "./pages/Registration/Registration"
import Flights from "./pages/Flights/Flights";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element = {<Registration />}/>
        <Route path="/flights" element={<Flights />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
