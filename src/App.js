import 'bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";
import "./assets/styles/global.css"
import "./assets/styles/responsive.css"
import { BrowserRouter as Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Welcome from './components/views/Welcome';
import Contact from './components/views/Contact';
import Differential from './components/views/Differential';
import Services from './components/views/Services';
import Question from './components/views/Question';
import Package from './components/views/Package';
import Media from './components/views/Media';
import Clients from './components/views/Clients';
import Employees from './components/views/Employees';
import Partners from './components/views/Partners';
import Banner from './components/views/Banner';
import Products from './components/views/Products';

const App = () => {
  return (
    <Route>
      <NavBar/>
      <Welcome/>
      <Contact/>
      <Package/>
      <Services/>
      <Question/>
      <Differential/>
      <Products/>
      <Media/>
      <Clients/>
      <Employees/>
      <Partners/>
      <Banner/>
      <Footer/>
    </Route>
  );
}

export default App;
