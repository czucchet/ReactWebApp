import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNavBar from './components/TopNavBar';
import HomePage from './pages/HomePage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <TopNavBar />
        <Switch>
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;