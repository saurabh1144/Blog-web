import Navbar from "./Navbar";
// import Home from './Home'
import Home1 from "./Home1";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Pages/Create";
import BlogDetails from "./Pages/BlogDetails";
import Error from "./Pages/Error";

function App() {
  //  var title="Hello! Welcome To India";
  return (
    <BrowserRouter>
      <div className="App">
     
        <Navbar />
        <div className="content">
        <Routes>
        <Route path="/" element={<Home1/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
        <Route path="/detail/:id" element={<BlogDetails/>}></Route>
        <Route path="*" element={<Error/>}></Route>
        
        
        
        </Routes>
        {/* <Home/> */}

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
