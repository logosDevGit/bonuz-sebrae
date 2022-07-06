import 'bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";
import "./assets/styles/global.css"
import "./assets/styles/responsive.css"
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

const App = () => {
  return (
    <>
      <NavBar/>
      <Welcome/>
      <Contact/>
      <Differential/>
      <Services/>
      <Question/>
      <Package/>
      <Media/>
      <Clients/>
      <Employees/>
      <Partners/>
      <Banner/>
      <Footer/>
    </>
  );
}

export default App;
