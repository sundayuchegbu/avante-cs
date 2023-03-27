import styles from "./style";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/About";
import Products from "./pages/Products";
import Clients from "./pages/Clients";
import News from "./pages/News";
import Contacts from "./pages/Contacts";
import Consulting from "./pages/services/Consulting";
import Software from "./pages/services/Software";

const App = () => (
  <BrowserRouter>
    <div className="bg-background w-full overflow">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/products" element={<Products />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/news" element={<News />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/services/consulting" element={<Consulting />} />
        <Route path="/services/software" element={<Software />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
