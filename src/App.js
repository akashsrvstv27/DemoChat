import React from 'react';
import './App.css';
import Contacts from './Contacts'
import Chats from './Chats'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="homepage">



      <Router>

        <Switch>



          


           


          <Route path="/chat"> 
            
            <Contacts />
            <Chats/>

          </Route>  

          <Route path="/profile"> 
            
           
            
          </Route>  


          <Route path="/"> 

            <Contacts />
            <div className="home__text">
              
            </div>
            
          </Route> 



        </Switch>

      </Router>
    </div>
  );
}

export default App;
