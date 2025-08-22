import { useState } from "react";
import CookieModalHeader from "./CookieModalHeader";
import CookieItem from "./CookieItem";
import CookieModalActions from "./CookieModalActions";

const initialSettings = {
    essential: true,
    analytics: false,
    marketing: false,
};

export default function CookieSettings({ onClose }) {
    const [settings, setSettings] = useState(initialSettings);

    const handleToggle = (key) => {
        if (key === "essential") return;
        setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const handleSave = () => {
    localStorage.setItem("cookieSettings", JSON.stringify(settings));
    alert("Your preferences have been saved!");
    onClose(); // close the modal after saving
  };

    const handleCancel = () => {
        setSettings(initialSettings); // reset settings
        onClose(); // close the modal
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg sm:max-w-xl md:max-w-2xl relative overflow-auto">
                <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
                    {/* Header */}
                    <CookieModalHeader title="Cookie Settings" onClose={onClose} />

                    {/* Description */}
                    <p className="mb-6 text-gray-700 text-sm sm:text-base">
                        Vebsigns Technologies uses cookies to ensure website functionality and to improve user experience. You can customize your preferences for each cookie category below. Essential cookies are always enabled.
                    </p>

                    {/* Cookie Items */}
                    <div className="space-y-4 sm:space-y-6">
                        <CookieItem
                            label="Essential Cookies"
                            description="Required for website operation and cannot be disabled."
                            checked={true}
                            disabled
                        />

                        <CookieItem
                            label="Analytics Cookies"
                            description="Help us understand how visitors interact with the site, so we can improve performance."
                            checked={settings.analytics}
                            onToggle={() => handleToggle("analytics")}
                        />

                        <CookieItem
                            label="Marketing Cookies"
                            description="Used to deliver personalized ads and measure advertising effectiveness."
                            checked={settings.marketing}
                            onToggle={() => handleToggle("marketing")}
                        />
                    </div>

                    {/* Actions */}
                    <CookieModalActions onCancel={handleCancel} onSave={handleSave} />
                </div>
            </div>
        </div>
    );

}
