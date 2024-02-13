import './App.css';
import { AboutMe, Navbar, Landing } from './screens';

//https://www.favicon-generator.org/
// svgrepo.com/svg

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <AboutMe />
    </div>
  );
}

export default App;
