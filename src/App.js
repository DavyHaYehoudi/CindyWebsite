import { Route, Routes } from "react-router-dom";
import Navigation from "./Layout/Navigation";
import Home from "./pages/Home";
import Consultations from "./pages/Consultations";
import Massages from "./pages/Massages";
import Contact from "./pages/Contact";
import Footer from "./Layout/Footer";
import MentionsLegales from "./pages/MentionsLegales";
import Rebozo from "./pages/Rebozo";
import Authentication from "./pages/Authentication";
import Admin from "./pages/Admin";
import AdminRoute from "./guard/AdminRoute";
import { useContext } from "react";
import { AuthAdminContext } from "./context/AuthAdminProvider";
import Page404 from "./pages/Page404";
import MassagesAll from "./pages/MassagesAll";

function App() {
  const { isAuthenticated } = useContext(AuthAdminContext);
  console.log("On est authentifié ? :", isAuthenticated);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultations/*" element={<Consultations />} />
        <Route path="/massages/*" element={<Massages />} />
        <Route path="/massages/all" element={<MassagesAll />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rebozo" element={<Rebozo />} />
        <Route path="/auth" element={<Authentication />} />

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        />

        <Route path="/mentions_legales" element={<MentionsLegales />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
