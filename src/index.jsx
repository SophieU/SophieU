import {observable, action, computed} from 'mobx'
import React, { Component,Fragment} from 'react'
import ReactDOM from 'react-dom'
import {observer,PropTypes as ObservablePropTypes, trace} from 'mobx-react'
import PropTypes from 'prop-types'

class Todo {
    id = Math.random()
    @observable title = ''
    @observable finished = false
    @action.bound toggle() {
        this.finished=!this.finished
    }
    constructor(title) {
        this.title = title
    }
}
class Store {
    @observable todos = []
    @computed get len() {
        return this.todos.filter(todo=>!todo.finished).length
    }

    @action.bound createTodo(title) {
       this.todos.push(new Todo(title)) 
    }
    @action.bound removeTodo(todo) {
        this.todos.remove(todo)
    }
}

var store = new Store()

@observer
class TodoItem extends Component{
    handleChange = (e) => {
        this.props.todo.toggle()
    }
    render() {
        let todo = this.props.todo
        return (<Fragment>
            <input type="checkbox" checked={todo.finished} onChange={this.handleChange} />
            <span className={["todo-item",todo.finished&&"finished"].join(" ")}>{todo.title}</span>
        </Fragment>)
    }
}

@observer
class TodoList extends Component{
    static propTypes = {
        // store: PropTypes.shape({
        //     todos:ObservablePropTypes.observableArrayOf(ObservablePropTypes.object)
        // }).isRequired
    }
    state = {inputValue:''}
    handleSubmit = (e) => {
        e.preventDefault();
        var store = this.props.store
        var inputValue = this.state.inputValue
        store.createTodo(inputValue)
        this.setState({
            inputValue:''
        })
    }
    handleChange = (e) => {
        var inputValue = e.target.value;
        this.setState({
            inputValue
        })
    }
    render() {
        const store = this.props.store
        return (<div>
            <header>
                <form action="" onSubmit={this.handleSubmit}>
                    <input className="input" type="text" value={this.state.inputValue} onChange={this.handleChange} placeholder="please input your todo"/>
                </form>
            </header>
            <ul>
                {
                    store.todos.map(item => {
                        return <li key={item.id}>
                            <TodoItem todo={item}></TodoItem>
                            <span onClick={()=>store.removeTodo(item)}>X</span>
                        </li>
                    })
                }
            </ul>
            <footer>{store.len} items unfinished</footer>
        </div> )
    }
}

ReactDOM.render(<TodoList store={store}/>,document.getElementById('app'))