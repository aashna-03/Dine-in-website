import React from 'react'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Login from './components/Login';



function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route path="/">
          <Login />
          </Route>
        </Switch>
      </div>
      </div>
      <Menu/>
      </Router>
     

    
  )
}
export default App;
