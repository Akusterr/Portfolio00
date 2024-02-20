import './App.css';
import { AboutMe, Navbar, Landing, Technologies, Portfolio } from './screens';

//https://www.favicon-generator.org/
// svgrepo.com/svg

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <AboutMe />
      <Technologies />
      <Portfolio />
    </div>
  );
}

export default App;
