import React from 'react';
import ReactDOM from 'react-dom/client';
import { startWorker } from 'helpers/mock-server/worker';
import App from './pages/home';

const render = () => {
  const root = document.getElementById('root') as HTMLElement;
  ReactDOM.createRoot(root).render(<App />);
};

if (process.env.NODE_ENV === 'development') {
  startWorker().then(render);
} else {
  render();
}
