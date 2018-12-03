import React,{lazy} from 'react';
import {Route,Switch} from 'react-router-dom';

// import Form from "./page/form/Form";
// import StandUp from "./page/standUp/standUp";
// import Mind from "./page/mind/mind";
// import CusCom from "./page/context/context";

/*const asyncForm = AsyncComponent(()=>import('./page/form/Form'));
const asyncStandUp = AsyncComponent(()=>import('./page/standUp/standUp'));
const asyncMind = AsyncComponent(()=>import('./page/mind/mind'));*/

const Form = lazy(()=>import("./page/form/Form"));
const StandUp = lazy(()=>import("./page/standUp/standUp"));
const Mind = lazy(()=>import("./page/mind/mind"));
const CusCom = lazy(()=>import("./page/context/context"));

class Routes extends React.Component {
    render() {
        return (<Switch>
                <Route path="/form" component={Form}></Route>
                <Route path="/standUp" component={StandUp}></Route>
                <Route path="/mind" component={Mind}></Route>
                <Route path="/context" component={CusCom}></Route>
                <Route redirect="/" component={Form}></Route>

        </Switch>)
    }
}

export default Routes;