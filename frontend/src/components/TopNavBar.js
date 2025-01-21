import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function TopNavBar() {
  const { user } = useContext(AuthContext);

  return (
    <div className="top-nav-bar">
      <span>Welcome, {user.name}</span>
      <div className="account-dropdown">
        {/* Account/Profile dropdown logic */}
      </div>
    </div>
  );
}

export default TopNavBar;