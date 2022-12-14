import React from 'react';
import Home from '../pages/home/home'
import Category from '../pages/categories/category';
import Item from '../pages/item/item';
import NotFound from '../pages/404/404';
import Layout from '../components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => (
<React.StrictMode>
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="category/:category" element={<Category />} />
        <Route exact path="category/:category/item/:item" element={<Item />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
</React.StrictMode>
)

export default App;