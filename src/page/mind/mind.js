
import React from 'react';
import Input from './component/input';
import Filter from './component/filter';

const lists = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
class mind extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            goodsName:'',
            showStocked:false,
        };
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
        var target = e.target;
        var name = e.target.name;
        var val=target.type==='checkbox'?target.checked:target.value;
        this.setState({
            [name]:val
        })
    }
    render() {
        return (<div>
            <h3>筛选商品</h3>
            <Input goodsName={this.state.goodsName} showStocked={this.state.showStocked} inputChange={this.handleChange}/>
            <Filter lists={lists} goodsName={this.state.goodsName} showStocked={this.state.showStocked}></Filter>
        </div>)
    }
}

export default mind;