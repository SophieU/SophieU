import React from 'react';
import {ThemeContext,themes} from "./theme-context";
import ThemeButton from './theme-button'

function Toolbar(props){
    return (
        <ThemeButton onClick={props.changeTheme}>
            Change Theme
        </ThemeButton>
    )
}
class Context extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            themes:themes.light,
        };
    }
    toggleTheme=()=>{
        this.setState((preState)=>{
            return {
                themes:preState.themes===themes.dark?themes.light:themes.dark
            }
        });
    };
    render() {
        return (<div>
            <ThemeContext.Provider value={this.state.themes}>
                <Toolbar changeTheme={this.toggleTheme}></Toolbar>
            </ThemeContext.Provider>
        </div>)
    }
}

export default Context;