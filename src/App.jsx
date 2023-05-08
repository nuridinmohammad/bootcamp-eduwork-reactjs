import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from './tugas/react-router/index'
import Home from './tugas/react-router/pages/home'
import About from './tugas/react-router/pages/about'
import Contact from './tugas/react-router/pages/contact'
import Category from './tugas/react-router/pages/category'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}>
            <Route path="home" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="category/:name" element={<Category/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
