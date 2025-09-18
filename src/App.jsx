import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import CookieBanner from "./Components/CookieBanner";
import CookieSettings from "./Components/CookieSettings";
import { Toaster } from "react-hot-toast";


function App() {
  const [isCookieModalOpen, setCookieModalOpen] = useState(false);

  const openCookieSettings = () => setCookieModalOpen(true);
  const closeCookieSettings = () => setCookieModalOpen(false);

  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <AppRoutes />
      <CookieBanner onOpenSettings={openCookieSettings} />
      {isCookieModalOpen && <CookieSettings onClose={closeCookieSettings} />}
    </Router>
  );
}

export default App;
