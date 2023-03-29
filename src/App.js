import Home from "./pages/Home";
import { BrowserRouter as Router, Routes , Route, Navigate, redirect } from 'react-router-dom';
import Detail from "./pages/Detail";


function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/detail" element={<Detail/>} />
      </Routes>
      </Router>
    );
}

export default App;
