import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';
import './styles/index.css';
import './utils/firebase';
import Root from './containers/Root';
import store from './utils/store';
import theme from './utils/theme';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Root />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();
