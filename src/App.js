import "./App.css";
import Footer from "./Components/Footer";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {" "}
          <Switch>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
