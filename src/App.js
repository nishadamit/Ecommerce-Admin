import React from 'react';
import { BrowserRouter,Link,Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Header1 from './components/HomePage/Header';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

    

const App = () =>{
    return(
      <BrowserRouter>
           <Header1 />
           <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={SignUp}/>
           </Switch>
      </BrowserRouter>
    )
}

export default App