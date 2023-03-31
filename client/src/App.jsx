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
import EgainCollaboration from "./pages/services/EgainCollaboration";
import EgainKnowledge from "./pages/services/EgainKnowledge";
import SocialMediaMgt from "./pages/services/SocialMediaMgt";
import Sas from "./pages/services/Sas";
import OracleDatabase from "./pages/services/OracleDatabase";
import WebDev from "./pages/services/WebDev";

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
        <Route path="/services/sas" element={<Sas />} />
        <Route
          path="/services/egain/collaboration"
          element={<EgainCollaboration />}
        />
        <Route path="/services/egain/knowledge" element={<EgainKnowledge />} />
        <Route path="/services/media/management" element={<SocialMediaMgt />} />
        <Route path="/services/oracle" element={<OracleDatabase />} />
        <Route path="/services/web/development" element={<WebDev />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
