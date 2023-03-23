import { Route, Routes } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/Layout';
import Sliders from './containers/Sliders/Sliders';
import About from './pages/About/About';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import Main from './pages/Main/Main';
import ServicesPage from './pages/Services/ServicesPage';
import ServicesMore from './pages/Services_detail/ServicesMore';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/sliders" element={<Sliders />} />
        <Route path="/services/more" element={<ServicesMore />} />
      </Routes>
    </Layout>
  );
}

export default App;
