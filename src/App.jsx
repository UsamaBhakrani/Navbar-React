import NavBar from "./components/NavBar";
import { links, social } from "./data";

const App = () => {
  return (
    <div>
      <NavBar social={social} links={links} />
    </div>
  );
};

export default App;
