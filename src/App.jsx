import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="app">

      <Sidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main className="main">

        <Navbar />

        <Dashboard />

      </main>

    </div>
  );
}

export default App;