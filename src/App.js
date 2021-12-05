import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SignInPage from './pages/SignInPage';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/signin" exact element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
