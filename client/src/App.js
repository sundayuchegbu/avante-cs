import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import Clients from "./components/Clients";
import News from "./components/News";
import Contacts from "./components/Contacts";
const App = () => (
  <BrowserRouter>
    <div className="bg-background w-full overflow-hidden ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/news" element={<News />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
