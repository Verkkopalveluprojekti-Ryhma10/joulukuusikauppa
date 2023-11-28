import Header from './components/common/Header';
import Home from './pages/Home';
import Footer from './components/common/Footer';

import Kuuset from './pages/Kuuset';
import Koristeet from './pages/Koristeet';
import Latvatahdet from './pages/Latvatahdet';
import Muuta from './pages/Muuta';
import LoginForm from './components/forms/LoginForm';
import RegisterForm from './components/forms/RegisterForm';

import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

function App() {
  return (
    <>
      <Header />        
          <Routes>
            <Route exact path="/" element={ <Home />} />
            <Route exact path="/Kuuset" element={ <Kuuset />} />
            <Route exact path="/Koristeet" element={ <Koristeet />} />
            <Route exact path="/Latvatahdet" element={ <Latvatahdet />} />
            <Route exact path="/Muuta" element={ <Muuta />} />
            <Route exact path="/kirjaudu" element={ <LoginForm />} />
            <Route exact path="/rekisteroidy" element={ <RegisterForm />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>        
      <Footer />
    </>
  );
}

export default App;