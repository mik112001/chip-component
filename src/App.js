import './App.css';
import {
  Route,
  Routes as Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import DashBoard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<DashBoard />} />
      </Switch>
    </Router>
  );
}

export default App;
