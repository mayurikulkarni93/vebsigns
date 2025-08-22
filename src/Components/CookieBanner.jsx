import { useState, useEffect } from "react";

function CookieBanner({ onOpenSettings }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookieConsent")) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setVisible(false);
  };

  const handleSetting = () => {
    // Show a modal or route for cookie settings
    alert("Open Cookie Settings Modal/Page");
  };

  return visible ? (
  <div className="fixed bottom-0 w-full bg-white border-t border-gray-300 p-4 shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center z-50 space-y-4 md:space-y-0">
    
    {/* Cookie Message */}
    <span className="text-gray-700 max-w-full md:max-w-2xl text-sm md:text-base">
      <strong>Vebsigns Technologies</strong> and its affiliated entities use cookies and similar technologies to perform essential online functions, such as authentication and security. You may disable cookies by changing your settings, but this may affect how the website functions. We also use analytics, advertising, and video-embedded cookies provided by Vebsigns or third parties. Please select your cookie preferences. For details, view our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a>.
    </span>
    
    {/* Buttons */}
    <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
      <button
        onClick={() => onOpenSettings()}
        className="bg-[#1849FF] text-white font-semibold px-6 py-2 rounded transition hover:bg-[#1539b8] w-full md:w-auto"
      >
        Cookie Setting
      </button>
      <button
        onClick={handleReject}
        className="bg-[#1849FF] text-white font-semibold px-6 py-2 rounded transition hover:bg-[#1539b8] w-full md:w-auto"
      >
        Reject all
      </button>
      <button
        onClick={handleAccept}
        className="bg-[#1849FF] text-white font-semibold px-6 py-2 rounded transition hover:bg-[#1539b8] w-full md:w-auto"
      >
        Accept all
      </button>
    </div>
  </div>
) : null;

}

export default CookieBanner;
