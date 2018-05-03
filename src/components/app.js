import 'materialize-css/dist/css/materialize.min.css';
import '../assets/css/app.css';
import React, { Component } from 'react';
import List from './list';
import AddItem from './addItems';
import listData from '../helpers/list_data';


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            listData: []
        }
    }

    getListData() {
        // allowed to not set a key:value since the name of the key is the same as the
        // variable of the object we imported
        setTimeout(() => {
            this.setState({
                listData
            })
        }, 500)
    }

    addItem(item) {
        this.setState({
            listData: [item, ...this.state.listData]
        })
    }

    componentDidMount() {
        this.getListData();
    }

    render(){
        return (
            <div className="container">
                <h1 className="center">To Do List</h1>
                <AddItem addItem={this.addItem.bind(this)}/>
                <List data={this.state.listData} />
            </div>
        );
    }
}

export default App;
