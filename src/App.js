import './App.css';
import { AboutMe, Navbar, Landing, Technologies } from './screens';

//https://www.favicon-generator.org/
// svgrepo.com/svg

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <AboutMe />
      <Technologies />
    </div>
  );
}

export default App;
