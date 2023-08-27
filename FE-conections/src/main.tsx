import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/app.router.tsx';
import { AppProvider } from './context/app.context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </>
);
