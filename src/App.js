import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Chat from './Chat';
import Sidebar from './Sidebar';
import { useState } from 'react';
import Login from './Login';
import auth from 'firebase';


function App() {
  // const [{user}, dispatch] = useStateValue();
  const [user, setuser] = useState("ali")
 
  const setUser = () =>{
    auth().onAuthStateChanged((userL) => {
    if (userL) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      
      // ...
    } else {
      return userL = "null";
    }
  });
  }
  

  return (
    <div className="App">
      {!user ? (
        <Login/>
      ):(
        <div class="app_body">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/" exact>
              <Chat />
            </Route>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
          </Switch>
        </Router>
      </div>
      )

      }
      
    </div>
  );
}

export default App;
