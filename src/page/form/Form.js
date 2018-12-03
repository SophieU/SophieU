import React from 'react';

class Form extends React.Component {
    constructor(props){
        super(props)
        this.state={
            name:'sophia',
            hobby:'很多',
            hair:''
        };
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
        var target = e.target;
        var value = target.type==='checkbox'?target.checked:target.value;
        var name = target.name;
        this.setState({
            [name]:value
        })
    }
    render() {
        return (<div className="form">
            <div className="form-item">
                姓名：
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
            </div>
            <div className="form-item">
                爱好：
                <input type="text" name="hobby" value={this.state.hobby} onChange={this.handleChange}/>
            </div>
            <div className="form-item">
                发型：
                <select name="hair" value={this.state.hair} onChange={this.handleChange}>
                    <option value="长发">长发</option>
                    <option value="短发">短发</option>
                </select>
            </div>
        </div>)
    }
}

export default Form;