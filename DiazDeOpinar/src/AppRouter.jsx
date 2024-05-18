import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Form from './Form';
import Proposal from './Proposal';
import Validate from './Validate';

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/form" element={<Form />} />
            <Route path="/proposal" element={<Proposal />} />
            <Route path='/validate' element={<Validate />} />
        </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;