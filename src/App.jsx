import { useState } from "react";
import Hamburger from "./component/Hamburger";
import Menu from "./component/Menu";
import Footer from "./component/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1>MAIN</h1>
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      <Footer/>
    </>
  );
}

export default App;
