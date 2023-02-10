import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AuthProvider } from "./Contexts/AuthContext";

import Login from "./Components/Login";
import Chats from "./Components/Chats";

function App() {
  return (
    <div style={{ fontFamily: "Avenir" }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/chats" component={Chats} />
            <Route path="/" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
