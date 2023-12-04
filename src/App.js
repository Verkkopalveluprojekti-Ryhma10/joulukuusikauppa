import Header from './components/common/Header';
import Home from './pages/Home';
import Footer from './components/common/Footer';
import { CartProvider } from './components/content/CartProvider'; 

import Kuuset from './pages/Kuuset';
import Koristeet from './pages/Koristeet';
import Latvatahdet from './pages/Latvatahdet';
import Muut from './pages/Muut';
import LoginForm from './components/forms/LoginForm';
import RegisterForm from './components/forms/RegisterForm';
import AdminAddProducts from './components/forms/AdminAddProducts';

import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

function App() {
  return (
    <CartProvider> {/*käytetään CartProvider komponenttia koko sovelluksen ympärillä */}
    <>
      <Header />        
          <Routes>
            <Route exact path="/" element={ <Home />} />
            <Route exact path="/Kuuset" element={ <Kuuset />} />
            <Route exact path="/Koristeet" element={ <Koristeet />} />
            <Route exact path="/Latvatahdet" element={ <Latvatahdet />} />
            <Route exact path="/Muut" element={ <Muut />} />
            <Route exact path="/kirjaudu" element={ <LoginForm />} />
            <Route exact path="/rekisteroidy" element={ <RegisterForm />} />
            <Route exact path='/yllapito' element= { <AdminAddProducts />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>        
      <Footer />
    </>
    </CartProvider>
  );
}

export default App;