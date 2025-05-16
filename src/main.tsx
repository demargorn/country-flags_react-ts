import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router';
import store from '@/app/providers/stores/store';
import App from '@/app/App';
import '@/app/styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <Provider store={store}>
         <HashRouter>
            <App />
         </HashRouter>
      </Provider>
   </StrictMode>
);
