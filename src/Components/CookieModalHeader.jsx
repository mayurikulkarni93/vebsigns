import React from 'react'

const CookieModalHeader = ({ title, onClose }) => {
    return (
        <div className="flex justify-between items-center mb-6 flex-wrap">
            {/* Title */}
            <h2 className="text-lg md:text-2xl font-semibold text-[#1849FF] truncate max-w-[80%] md:max-w-full">
                {title}
            </h2>

            {/* Close Button */}
            <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-800 font-bold text-xl mt-2 md:mt-0"
                aria-label="Close cookie settings"
            >
                ×
            </button>
        </div>
    );

}

export default CookieModalHeader
