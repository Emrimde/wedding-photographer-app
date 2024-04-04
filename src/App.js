import './App.css';
import Nav from './Components/Nav/Nav.tsx';
import Section from './Components/Section/Section.tsx';
import Link from './Components/Link/Link.tsx';
import Div from './Components/Div/Div.tsx';


function App() {
  return (
    <div className="App">
      <Nav />
      <Section customClass="landing-page ">
        <Div customClass="normal-div">
          <Link href="#" customClass=" scrolling-down-link ">V</Link>
        </Div>
      </Section>
    </div>
  );
}

export default App;
