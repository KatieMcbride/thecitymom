import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing/index';
// import './styles/app.css';
// import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          {/* <Route exact path="/signup">
            <SignUp />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
