import './App.css';
import { Route, Routes } from 'react-router-dom';
import Blogs from './pages/blogs';
import Menu from './components/menu';
import { BlogPage } from './pages/blog';
import HomePage from './pages/homepage';
import Product from './pages/product';

function App() {
  return (
    <div className="App">
      <Menu />
      <main className='main'>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/blog" element={<Blogs />} />
          <Route exact path="/blog/id" element={<BlogPage />} />
          <Route exact path="/product" element={<Product />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
