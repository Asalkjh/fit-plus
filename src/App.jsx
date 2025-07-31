
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from "./pages/AboutUs";
import CreateArticle from "./pages/CreateArticle";
import ArticlePage from "./pages/ArticlePage";
import Error from "./pages/error404";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/article/:id" element={<ArticlePage/>} />
        <Route path="/createArticle" element={<CreateArticle/>} />
        <Route path="*" element={<Error/>} />

      </Routes>
      

      
    </div>
  );
}

export default App;
