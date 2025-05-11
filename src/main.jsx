import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppWrapper from './App.jsx';
import Dashboard from './Dashboard.jsx';
import ProductListingPage from './ProductListingPage.jsx'; // Ensure this path is correct

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppWrapper />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/products/:category" element={<ProductListingPage />} />
    </Routes>
  </BrowserRouter>
);
