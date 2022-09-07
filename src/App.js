import './App.css';
import { Route, Routes } from 'react-router-dom';
import Blogs from './pages/blogs';
import Menu from './components/menu';
import { BlogPage } from './pages/blog';

function App() {
  return (
    <div className="App">
      <Menu />
      <main>
        <Routes>
          <Route exact path="/" element={<Blogs />} />
          <Route exact path="/blog" element={<Blogs />} />
          <Route exact path="/blog/id" element={<BlogPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
