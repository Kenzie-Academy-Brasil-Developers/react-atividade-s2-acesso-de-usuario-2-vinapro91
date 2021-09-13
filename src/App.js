import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home";
import { members } from "./members";
import Custumers from "./pages/custumers";
import Company from "./pages/Company";
import { useState } from "react";
function App() {
  const [newMember, setNewMember] = useState(members);

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Home newMember={newMember} setNewMember={setNewMember} />
          </Route>
          <Route path="/customer/:id">
            <Custumers members={newMember} />
          </Route>
          <Route path="/company/:id">
            <Company members={newMember} />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
