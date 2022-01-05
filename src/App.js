import "./App.css";
import Footer from "./Components/Footer";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "./Components/AboutPage";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {" "}
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>

            <Route path="/about">
              <AboutPage />
            </Route>
          </Switch>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
