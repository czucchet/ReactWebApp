import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ChatProvider } from './contexts/ChatContext';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <AuthProvider>
      <ChatProvider>
        <Router>
          <App />
        </Router>
      </ChatProvider>
    </AuthProvider>
  </Provider>,
  document.getElementById('root')
);