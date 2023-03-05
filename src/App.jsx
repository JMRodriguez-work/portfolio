import { Contact, Footer, Main, Projects, Sidenav, Work } from "./components/index";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Projects />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
