import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Form from './Form';
import Proposal from './Proposal';
import Validate from './Validate';

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-repeat bg-[url(/sonrisa1.png)]">
      {children}
    </div>
  );
}

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/form" element={<Form />} />
            <Route path="/proposal" element={<Proposal />} />
            <Route path='/validate' element={<Validate />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
