import React from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";


import Home from "./pages/home";
import Found from "./pages/found";
import News from "./pages/news";
import Mind from "./pages/mind";
function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/" >首页</Link>
          <Link to="/found" >找房</Link>
          <Link to="/news" >资讯</Link>
          <Link to="/mind" >我的</Link>
        </nav> 
        <section>
          <Route  component={Home}  path="/"  exact ></Route>
          <Route  component={Found}  path="/found"  exact ></Route>
          <Route  component={News}  path="/news"  exact ></Route>
          <Route  component={Mind}  path="/mind"  exact ></Route>
        </section>
      </Router>
    </div>
  );
}

export default App;
