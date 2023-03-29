import { Route, Routes } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import BlogPage from './pages/BlogPage';
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
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/services/more" element={<ServicesMore />} />
      </Routes>
    </Layout>
  );
}

export default App;
