import React from 'react';
import Input from './component/Input'
import Print from './component/print'

function toCeil(val){
    return (val - 32) * 5 / 9;
}
function toFua(val){
    return (val * 9 / 5) + 32;
}
function tryConvert(val,convert){
    const input = parseFloat(val);
    if(Number.isNaN(input)){
        return '';
    }
    let output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class standUp extends React.Component {
    constructor(props){
        super(props);
        this.state={
            scale:'c',
            temperature:'',
        };
        this.handleCeilChange= this.handleCeilChange.bind(this);
        this.handleFuaChange= this.handleFuaChange.bind(this);
    }
    handleCeilChange(val){
        this.setState({
            scale:'c',
            temperature:val
        })
    }
    handleFuaChange(val){
        this.setState({
            scale:'f',
            temperature:val
        })
    }
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const ceil = scale==='f'?tryConvert(temperature,toCeil):temperature;
        const fua = scale==='f'?temperature:tryConvert(temperature,toFua);
        return (<div>
            <Input scale="c" temperature={ceil} tempChange={this.handleCeilChange}/>
            <Input scale="f" temperature={fua} tempChange={this.handleFuaChange}/>
            <Print temperature={scale==='f'?tryConvert(temperature,toCeil):temperature}/>
        </div>)
    }
}

export default standUp;