import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ChatPage from "./pages/ChatPage";
import HistoryPage from "./pages/HistoryPage";
import SettingsPage from "./pages/SettingsPage";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode ? "true" : "false");
  }, [darkMode]);

  return (
    <Routes>
      <Route path="/" element={<Layout darkMode={darkMode} />}>
        <Route index element={<ChatPage />} />
        <Route path="history" element={<HistoryPage />} />
        <Route
          path="settings"
          element={<SettingsPage darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
