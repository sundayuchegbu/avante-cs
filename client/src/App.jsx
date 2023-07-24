import styles from "./style";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/About";
import Products from "./pages/Products";
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
import Agencies from "./pages/clients/Agencies";
import Financial from "./pages/clients/Financial";
import Telecoms from "./pages/clients/Telecoms";
import SME from "./pages/clients/SME";
import Goods from "./pages/clients/Goods";
import NewsExplicit from "./components/NewsExplicit";
// import Register from "./pages/auth/Register";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrolToTop";
import Implementation from "./pages/services/consulting/Implementation";
import ProjectManagement from "./pages/services/consulting/ProjectManagement";
import UserResearch from "./pages/services/consulting/UserResearch";
import MarketSurvey from "./pages/services/consulting/MarketSurvey";
import FeasibilityStudies from "./pages/services/consulting/FeasibilityStudies";

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <div className="bg-background w-full overflow ">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/products" element={<Products />} />
        <Route path="/details/:id" element={<NewsExplicit />} />
        <Route path="/news" element={<News />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/services/consulting" element={<Consulting />} />
        <Route path="/services/software" element={<Software />} />
        <Route path="/services/sas" element={<Sas />} />
        <Route path="/clients/agencies" element={<Agencies />} />
        <Route path="/clients/financial" element={<Financial />} />
        <Route path="/clients/telecoms" element={<Telecoms />} />
        <Route path="/clients/sme" element={<SME />} />
        <Route path="/clients/goods" element={<Goods />} />
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}

        <Route
          path="/services/egain/collaboration"
          element={<EgainCollaboration />}
        />
        <Route path="/services/market/survey" element={<MarketSurvey />} />

        <Route path="/services/egain/knowledge" element={<EgainKnowledge />} />
        <Route path="/services/media/management" element={<SocialMediaMgt />} />
        <Route path="/services/oracle" element={<OracleDatabase />} />
        <Route path="/services/web/development" element={<WebDev />} />
        <Route path="/services/implementations" element={<Implementation />} />
        <Route path="/services/user/research" element={<UserResearch />} />
        <Route
          path="/services/feasibility/studies"
          element={<FeasibilityStudies />}
        />
        <Route
          path="/services/project/management"
          element={<ProjectManagement />}
        />
      </Routes>
      <Toaster />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
