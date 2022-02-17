import './App.css';
import NavMenu from './components/Nav';
import Main from './components/Main';
import Skill from './components/Skills';
import Footer from './components/Footer';



function App() {
  return (
    [
      <NavMenu />,
      <Main />,
      <Skill />,
      <Footer />

    ]


    // <Main />
    // <Body />
    // <Skills />
    // <Footer />

  );
}


export default App;
