import { BrowserRouter ,Routes , Route , Link} from "react-router-dom";
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'

function App() {
  return (
    <BrowserRouter>
    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">Avotra Ader Portfolio</a>
          </div>
          <ul class="nav navbar-nav">
            <li><a href="#"><Link to='/'>Home</Link></a></li>
            <li><a href="#"><Link to='/about'>About</Link></a></li>
            <li><a href="#"><Link to='/contact'>Contact</Link></a></li>
          </ul>
        </div>
    </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;