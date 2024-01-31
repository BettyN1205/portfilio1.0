import { useContext } from 'react';
import About from './components/about/about';
import Intro from './components/intro/intro';
import ProductList from './components/productList/productList';
import Contact from './components/contact/contact';
import Toggle from './components/toggle/toggle';

import { ThemeContext} from './context';


function App() {

  const theme=useContext(ThemeContext);
  const darkMode=theme.state.darkMode;

  return (
    <div style={{backgroundColor:darkMode ? "#222" : "white",color: darkMode && "white"}}>
      <Toggle/>
      <Intro />
      <About />
      <ProductList/>
      <Contact/>
    </div>
  );
}

export default App;
