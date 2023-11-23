import Header from './components/common/Header';
import Home from './pages/Home';
import Footer from './components/common/Footer';

import Kuuset from './pages/Kuuset';
import Koristeet from './pages/Koristeet';
import Latvatahdet from './pages/Latvatahdet';
import Muuta from './pages/Muuta';
import LoginForm from './components/forms/LoginForm';

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
            <Route exact path="/Kuuset" element={ <Kuuset />} />
            <Route exact path="/Koristeet" element={ <Koristeet />} />
            <Route exact path="/Latvatahdet" element={ <Latvatahdet />} />
            <Route exact path="/Muuta" element={ <Muuta />} />
            <Route exact path="/kirjaudu" element={ <LoginForm />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      <Footer />
    </>
  );
}

export default App;