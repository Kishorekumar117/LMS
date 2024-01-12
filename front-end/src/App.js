import logo from './logo.svg';
import './App.css';
import Faculty from './Components/Faculty';
import Try from './Components/Try';
import Student from './Components/Student';
import Navbar from './Components/Navbar';
import NavbarAdmin from './Components/NavbarAdmin';
import AdmSideNav from './Components/AdminConsole/AdmSideNav';
import AdmSideNavRoute from './Components/AdminConsole/AdmSideNavRoute';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


      <Navbar></Navbar>

      {/* <NavbarAdmin></NavbarAdmin> */}

      {/* <AdmSideNavRoute></AdmSideNavRoute> */}


      {/* <Footer></Footer> */}


















      {/* <Faculty></Faculty> */}

      {/* <Student></Student> */}




      {/* <Try></Try> */}
    </div>
  );
}

export default App;
