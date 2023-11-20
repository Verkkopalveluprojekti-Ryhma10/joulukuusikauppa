import Header from './components/common/Header';
import Home from './pages/Home';
import Footer from './components/common/Footer';

import Koristeet from './pages/Koristeet';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';


function App() {
  return (
    <>
      <Header />
        <Router>
          <Routes>
            <Route exact path="/" element={ <Home />} />
            <Route exact path="/Koristeet" element={ <Koristeet />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      <Footer />
    </>
  );
}

export default App;