// SettingsPage.js
import React from "react";
import "./SettingsPage.css";

function SettingsPage({ darkMode, setDarkMode }) {
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="settings-page">
      <h2>Settings</h2>
      <div className="settings-option">
        <label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={handleDarkModeToggle}
          />
          Enable Dark Mode
        </label>
      </div>
      {/* Additional settings (notifications, themes, etc.) can go here */}
    </div>
  );
}

export default SettingsPage;
