import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { fetchSlider } from './API/request';
import './App.css';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import BlogPage from './pages/BlogPage';
import BlogDetailsPage from './pages/BlogPage/BlogDetails';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import Main from './pages/Main/Main';
import ServicesPage from './pages/Services/ServicesPage';
import ServicesMore from './pages/Services_detail/Services_Detail';

const data = fetchSlider().then((item) => item);

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/blog">
          <Route index element={<BlogPage />} />
          <Route path=":id" element={<BlogDetailsPage />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
