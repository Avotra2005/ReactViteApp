import { BrowserRouter ,Routes , Route , Link} from "react-router-dom";
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'


function App() {
  return (
    <BrowserRouter>
      <nav className="Navbar">
        <div className="link"><Link to='/'>Home</Link></div>
        <div className="link"><Link to='/about'>About</Link></div>
        <div className="link"><Link to='/contact'>Contact</Link></div>
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