
import './App.css';
import { Routes,Link,Route} from 'react-router-dom';
import MovieData from 'MovieData';




function App() {
  return (
    <div className="App">
     <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/MovieData.description"> description</Link>
            </li>
            <li>
              <Link to="/MovieData.trailer"> trailer</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/MovieData.description'  element= { <description/>}/>
          <Route path='/MovieData.trailer'  element= { <trailer/>}/>
          

        </Routes>
    </div>
  );
}

export default App;