import { useState } from "react";
import { Header } from "@/sections/Header";
import { MainContent } from "@/sections/MainContent";
import { Footer } from "@/sections/Footer";
import { AdminPanel } from "@/sections/AdminPanel";

// Secret password to access admin panel
const ADMIN_PASSWORD = "Xk9#mP2$vL8@qR5!nW7^tY4&jH6*bN3";

function App() {
  const [isAdminMode, setIsAdminMode] = useState(false);

  const handleAdminAccess = (password: string) => {
    if (password === ADMIN_PASSWORD) {
      setIsAdminMode(true);
      return true;
    }
    return false;
  };

  const handleExitAdmin = () => {
    setIsAdminMode(false);
  };

  if (isAdminMode) {
    return (
      <div className="bg-gray-100 box-border caret-transparent flex flex-col min-h-screen break-words">
        <Header />
        <AdminPanel onExit={handleExitAdmin} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-100 box-border caret-transparent flex flex-col min-h-screen break-words">
      <Header />
      <MainContent onAdminAccess={handleAdminAccess} />
      <Footer />
    </div>
  );
}

export default App;
