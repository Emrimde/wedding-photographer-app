import './App.css';
import Nav from './Components/Nav/Nav.tsx';
import Section from './Components/Section/Section.tsx';
import Link from './Components/Link/Link.tsx';
import Div from './Components/Div/Div.tsx';
import Header from './Components/Header/Header.tsx';
import SecondSection from './Components/Second-Section/Second-Section.tsx';


function App() {
  return (
    <div className="App">
      <Nav />
      <Section customClass="landing-page">
         <Div customClass="header-div">
          <Header customClass="header-name text-center">Photographer's Name</Header>
          </Div> 
      </Section>
      <SecondSection></SecondSection>
    </div>
  );
}

export default App;
