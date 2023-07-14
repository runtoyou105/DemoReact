import './App.css';
import Detail from './components/Detail/Detail';
import './components/Header/Header';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout />}>
          <Route index element={<Home/>}/>
          <Route path="card/:id" element={<Detail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
