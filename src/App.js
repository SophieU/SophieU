import React, { Component,Suspense } from 'react';
import {BrowserRouter  as Router,Link} from 'react-router-dom';
import './App.css';
import Routes from './Routes';
class App extends Component {

  render() {
    return (
       <Router>
           <div>
               <fieldset>
                   <legend>导航位</legend>
                   <div>
                       <ul>
                           <li><Link to="/form">Form表单</Link></li>
                           <li><Link to="/standUp">温度计</Link></li>
                           <li><Link to="/mind">商品筛选</Link></li>
                           <li><Link to="/context">Context应用</Link></li>
                       </ul>
                   </div>
               </fieldset>
               <fieldset>
                   <legend>路由位</legend>
                   <Suspense fallback={<div>loading...</div>}>
                       <Routes />
                   </Suspense>
               </fieldset>
           </div>
       </Router>
    );
  }

}

export default App;
