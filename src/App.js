import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Layout/Navigation";
import Home from "./pages/Home";
import Consultations from "./pages/Consultations";
import Massages from "./pages/Massages";
import Contact from "./pages/Contact";
import Footer from "./Layout/Footer";
import MentionsLegales from "./pages/MentionsLegales";
import Rebozo from "./pages/Rebozo";
import Authentication from "./pages/Authentication";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultations" element={<Consultations />} />
        <Route path="/massages" element={<Massages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rebozo" element={<Rebozo />} />
        <Route path="/private" element={<Authentication />} />
        <Route path="/mentions_legales" element={<MentionsLegales />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
