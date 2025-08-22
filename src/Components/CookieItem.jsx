import React from 'react'

const CookieItem = ({ label, description, checked, disabled, onToggle }) => {
 return (
  <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 p-4 border rounded-lg ${disabled ? 'bg-gray-50' : ''}`}>
    <input
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={onToggle}
      className="w-5 h-5 accent-[#1849FF] flex-shrink-0"
    />
    <div className="flex-1">
      <span className="font-medium text-gray-900">{label}</span>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  </div>
);

}

export default CookieItem
