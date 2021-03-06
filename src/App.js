import './styles/style.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ContactScreen from './screens/ContactScreen';
import GalleryScreen from './screens/GalleryScreen';
import PageScreen from './screens/PageScreen';

function App() {
  require('dotenv').config()
  
  return (
    <Router>
    <Route path = {`${process.env.PUBLIC_URL}/contact`} component={ContactScreen}/>
    <Route path = {`${process.env.PUBLIC_URL}/galerie`} component={GalleryScreen}/>
    <Route path = {`${process.env.PUBLIC_URL}/despre`} component={PageScreen}/>
    <Route path = {`${process.env.PUBLIC_URL}/`} component={HomeScreen} exact/>
    <Footer/>
    </Router>
  );
}

export default App;
