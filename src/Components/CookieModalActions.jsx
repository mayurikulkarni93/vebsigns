import React from 'react'

const CookieModalActions = ({ onCancel, onSave }) => {
  return (
  <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-end">
    <button
      onClick={onCancel}
      className="w-full sm:w-auto px-6 py-2 rounded font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
    >
      Cancel
    </button>
    <button
      onClick={onSave}
      className="w-full sm:w-auto px-6 py-2 rounded font-medium bg-[#1849FF] text-white hover:bg-[#1539b8] transition"
    >
      Save Preferences
    </button>
  </div>
);

}

export default CookieModalActions
