import './styles/style.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  require('dotenv').config()
  
  return (
    <Router>
    <Route path = {`${process.env.PUBLIC_URL}/`} component={HomeScreen} exact/>
    <Footer/>
    </Router>
  );
}

export default App;
