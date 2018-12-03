import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
        var value = e.target.value;
        this.props.tempChange(value);
    }
    render() {
        return (<div>
            <h3>请输入{this.props.scale==='c'?'摄氏度':'华氏度'}</h3>
            <input type="text" value={this.props.temperature} onChange={this.handleChange}/>
        </div>)
    }
}
Input.defaultProps={
    scale:'c',
};
Input.propTypes={
    scale:PropTypes.string,
    tempChange:PropTypes.func
};

export default Input;