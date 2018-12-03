import {ThemeContext} from "./theme-context";
import React from 'react';

class ThemeButton extends React.Component{
    static contextType=ThemeContext;
    render(){
        let props = this.props;
        let theme = this.context;
        return (
           <div>
               <button {...props}></button>
               <div style={{width:100,height:100,background:theme.background}}></div>
           </div>
        )
    }
}
// ThemeButton.contextType = ThemeContext;

export default ThemeButton;