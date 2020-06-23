import React ,{ Component,  } from 'react';
import { HashRouter as Router, Route, Redirect} from "react-router-dom";

//  home 其实是一个 tabbar 
import Home from "./pages/home";
// 地图找房
import MapFound from "./pages/mapFound";
// 城市选择
import CitySelect from "./pages/citySelect";

//

import {getCurrentPosition} from './utils/bdMapHelper'
class App extends Component {
  componentDidMount(){
    getCurrentPosition()
  }
  render(){
    return (
      <div className="App">
        <Router>
         
            {/* home 表示tabbar结构 => 4个小页面  */}
            <Route  component={Home}  path="/home"   ></Route>
            <Route path="/" exact >
            <Redirect to="/home" ></Redirect>
          </Route>
            <Route  component={MapFound}  path="/mapFound"  exact ></Route>
            <Route  component={CitySelect}  path="/citySelect"  exact ></Route>
            
        </Router>
      </div>
    );
  }
}

export default App;
