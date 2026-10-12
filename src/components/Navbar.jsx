import { Search, Bell, Plus } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-title">
        <h1>Overview</h1>
        <p>Here's what's happening with your business.</p>
      </div>

      <div className="navbar-actions">
        <div className="search-box">
          <Search size={17} />
          <input
            type="text"
            placeholder="Search..."
          />
        </div>

        <button className="icon-button">
          <Bell size={19} />
          <span className="notification-dot"></span>
        </button>
        <ThemeToggle />

        <button className="create-button">
          <Plus size={18} />
          Create
        </button>

        <div className="profile">
          <div className="avatar">H</div>

          <div className="profile-info">
            <strong>Haseen</strong>
            <span>Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
