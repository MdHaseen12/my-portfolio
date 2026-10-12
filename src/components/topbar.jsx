import {
  Search,
  Bell,
  ChevronDown,
  Plus
} from "lucide-react";

function Topbar() {
  return (
    <header className="topbar">

      <div>
        <h1>Overview</h1>
        <p>Here's what's happening with your business.</p>
      </div>

      <div className="topbar-actions">

        <div className="search">
          <Search size={17} />

          <input
            type="text"
            placeholder="Search..."
          />
        </div>

        <button className="notification">
          <Bell size={19} />
          <span></span>
        </button>

        <button className="create-btn">
          <Plus size={17} />
          Create
        </button>

        <div className="user">

          <div className="user-avatar">
            H
          </div>

          <div>
            <strong>Haseen</strong>
            <small>Admin</small>
          </div>

          <ChevronDown size={15} />

        </div>

      </div>

    </header>
  );
}

export default Topbar;

.main {
  margin-left: 245px;
  min-height: 100vh;
  padding: 28px 32px;
}

.topbar {
  min-height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
}

.topbar h1 {
  font-size: 27px;
  letter-spacing: -0.7px;
}

.topbar p {
  margin-top: 5px;
  color: #8b8f9f;
  font-size: 13px;
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 11px;
}

.search {
  width: 210px;
  height: 42px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 13px;
  background: white;
  border: 1px solid #e7e8ee;
  border-radius: 10px;
  color: #9ca0ad;
}

.search input {
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 13px;
}

.notification {
  width: 42px;
  height: 42px;
  border: 1px solid #e7e8ee;
  background: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #656a78;
  position: relative;
}

.notification span {
  position: absolute;
  width: 7px;
  height: 7px;
  background: #6255e7;
  border-radius: 50%;
  right: 9px;
  top: 8px;
}

.create-btn {
  height: 42px;
  border: none;
  padding: 0 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 7px;
  background: #6255e7;
  color: white;
  font-size: 13px;
  font-weight: 600;
  transition: 0.2s;
  cursor: pointer;
}

.create-btn:hover {
  background: #5144d1;
  transform: translateY(-1px);
}

.user {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 8px;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #6255e7;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
}

.user strong {
  display: block;
  font-size: 12px;
}

.user small {
  display: block;
  color: #9a9daa;
  font-size: 10px;
  margin-top: 2px;
}