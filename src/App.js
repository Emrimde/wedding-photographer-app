import './App.css';
import Nav from './Components/Nav/Nav.tsx';
import Section from './Components/Section/Section.tsx';


function App() {
  return (
    <div className="App">
      <Nav />
      <Section customClass="landing-page"> </Section>
    </div>
  );
}

export default App;
