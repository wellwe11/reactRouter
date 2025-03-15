import "./App.css";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <ul>
        <li>
          <Link to="profile/asd">click default</Link>
          <br></br>
          <Link to="profile/pageone">click page one</Link>
          <br></br>
          <Link to="profile/pagetwo">click page two</Link>
        </li>
      </ul>
    </div>
  );
};

export default App;
