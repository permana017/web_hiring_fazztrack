import Home from "./pages/Home";
import { BrowserRouter as Router, Routes , Route, Navigate, redirect } from 'react-router-dom';
import Detail from "./pages/Detail";
import Matrix from "./pages/Matrix";


function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/detail" element={<Detail/>} />
          <Route path="/matrix" element={<Matrix/>} />
      </Routes>
      </Router>
    );
}

export default App;
