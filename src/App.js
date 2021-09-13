import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home";
import { members } from "./members";
import Custumers from "./pages/custumers";
import Company from "./pages/Company";
import { useState } from "react";
import Input from "./components/input";
function App() {
  const [newMember, setNewMember] = useState(members);
  // const [name, setName] = useState();
  // const [type, setType] = useState();
  // const addMember = (name, type) => {
  //   setNewMember([
  //     ...newMember,
  //     { id: `${newMember.length + 1}`, name: name, type: type },
  //   ]);
  // };
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Home
              members={newMember}
              newMember={newMember}
              setNewMember={setNewMember}
            />
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
