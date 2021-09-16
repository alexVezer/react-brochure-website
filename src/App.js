import './styles/style.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ContactScreen from './screens/ContactScreen';

function App() {
  require('dotenv').config()
  
  return (
    <Router>
    <Route path = {`${process.env.PUBLIC_URL}/contact`} component={ContactScreen} exact/>
    <Route path = {`${process.env.PUBLIC_URL}/`} component={HomeScreen} exact/>
    <Footer/>
    </Router>
  );
}

export default App;
