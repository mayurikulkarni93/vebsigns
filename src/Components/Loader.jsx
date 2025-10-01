import { useState, useEffect } from "react";
import { HashLoader, PacmanLoader } from "react-spinners";

function Loader() {
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#36d7b7"); // Pacman default color

    const duration = 1000; // Duration in milliseconds (1 second)
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-[#122D4D] via-[#15042E] via-[#241032] to-[#15042E] transition-opacity duration-500">
      <div className="flex flex-col items-center gap-6">
        {/* Loader with glow */}
        <div className="p-4 rounded-full bg-black/30 shadow-[0_0_30px_#00E5FF]">
          <HashLoader
            color={color}
            loading={loading}
            size={110}
            aria-label="Loading Spinner"
          />
        </div>

        {/* Optional modern text */}
        <p className="text-white text-lg font-semibold animate-pulse drop-shadow-md">
          Loading, please wait...
        </p>
      </div>
    </div>
    );
}

export default Loader;
