import logo from './logo.svg';
import './App.css';
import './my-components/css/style.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Hero from './my-components/js/Hero';
import Header from './my-components/js/Header';
import Frontpage from './my-components/js/Frontpage';
import About from './my-components/js/About';
import Contact from './my-components/js/Contact';
import Footer from './my-components/js/Footer';
import Services from './my-components/js/Services';
import TermsNConditions from './my-components/js/TermsNConditions';
import PrivacyNPolicy from './my-components/js/PrivacyNPolicy';


function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route exact path = "/" element= {<Frontpage />} ></Route>
        <Route exact path = "/about" element ={<About />}></Route>
        <Route exact path = "/services" element ={<Services />}></Route>
        <Route exact path = "/contact" element ={<Contact />}></Route>
        <Route exact path = "/terms-and-conditions" element ={<TermsNConditions />}></Route>
        <Route exact path = "/privacy-n-policy" element ={<PrivacyNPolicy />}></Route>
    </Routes>
    </>
  );
}

export default App;