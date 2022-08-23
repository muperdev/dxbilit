import './App.css';
import { Route, Routes } from 'react-router-dom';
import Blogs from './pages/blogs';
import Menu from './components/menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <main>
        <Routes>
          <Route path="/" element={<Blogs />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
