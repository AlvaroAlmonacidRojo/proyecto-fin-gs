import React, { Component } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './AppRoutes';
import { LanguageContext } from './components/Translation/context';
import store from './redux/configureStore';

class App extends Component {
  public render() {
    return (
      <ReduxProvider store={store}>
      <LanguageContext.Provider value="es">
        <Router>
          <AppRoutes />
        </Router>
      </LanguageContext.Provider>
      </ReduxProvider>
    );
  }
}

export default App;
