import React from 'react';

class input extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            goodsName:'',
            showStocked:false
        };
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
        this.props.inputChange(e)
    }
    render() {
        return (<div>
            <input placeholder="search..." type="text" name="goodsName" value={this.props.goodsName} onChange={this.handleChange}/><br/>
            <input type="checkbox" name="showStocked" value={this.props.showStocked} onChange={this.handleChange} />only show products in stocked
        </div>)
    }
}

export default input;