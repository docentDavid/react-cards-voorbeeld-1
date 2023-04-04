// https://dev.to/sobhandash/how-to-simply-use-font-awesome-6-in-react-1bm8
import { library } from "@fortawesome/fontawesome-svg-core";
import { faComments, faClock } from "@fortawesome/free-solid-svg-icons";

import Cards from "./Cards";

library.add(faComments, faClock);

const App = () => {
  return (
    <div className="App">
      <Cards />
    </div>
  );
};

export default App;
