import React from "react";
import { BrowserRouter as Router, Route ,HashRouter,Switch, hashHistory} from "react-router-dom";
import IndexView from '../views/index/index';
import Footer from '../components/footer/Footer.js'
import MineView from '../views/mine/mine';
import LoginView from '../views/login/login';
import { createHashHistory } from "history";
const history = createHashHistory();


export default class Index extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Router history={history}>
        {/* <Route path="/" component={IndexView} exact/> */}
        <Route path="/mine" component={MineView} exact/>
        <Route path="/" component={LoginView} exact/>

        <Footer/>
      </Router>
      
      </div>
      
    );
  }
}
