import { Contact, Main, Projects, Sidenav, Work } from "./components/index";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Projects />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
