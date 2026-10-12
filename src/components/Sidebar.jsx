import {
  LayoutDashboard,
  FileText,
  CreditCard,
  BarChart3,
  CheckSquare,
  Settings,
  Menu,
  X,
} from "lucide-react";

function Sidebar({ mobileOpen, setMobileOpen }) {
  return (
    <>
      <button
        className="mobile-menu-button"
        onClick={() => setMobileOpen(true)}
      >
        <Menu size={20} />
      </button>

      {mobileOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`sidebar ${
          mobileOpen ? "mobile-open" : ""
        }`}
      >
        <div className="sidebar-top">

          <div className="logo">
            HASEEN<span>.</span>
          </div>

          <button
            className="sidebar-close"
            onClick={() => setMobileOpen(false)}
          >
            <X size={19} />
          </button>

        </div>

        <div className="nav-title">
          MAIN
        </div>

        <nav className="sidebar-nav">

          <a className="nav-item active">
            <LayoutDashboard size={18} />
            <span>Overview</span>
          </a>

          <a className="nav-item">
            <FileText size={18} />
            <span>Invoices</span>
          </a>

          <a className="nav-item">
            <CreditCard size={18} />
            <span>Payments</span>
          </a>

          <a className="nav-item">
            <BarChart3 size={18} />
            <span>Analytics</span>
          </a>

          <a className="nav-item">
            <CheckSquare size={18} />
            <span>Checklists</span>
          </a>

        </nav>

        <div className="sidebar-bottom">

          <a className="nav-item">
            <Settings size={18} />
            <span>Settings</span>
          </a>

        </div>

      </aside>
    </>
  );
}

export default Sidebar;
