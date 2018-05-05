import 'materialize-css/dist/css/materialize.min.css';
import '../assets/css/app.css';
import React, { Component } from 'react';
import axios from 'axios';
import List from './list';
import AddItem from './addItems';
import listData from '../helpers/list_data';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=dwidjaja';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listData: []
        }
    }

    async getListData() {
        // allowed to not set a key:value since the name of the key is the same as the
        // variable of the object we imported
        try {
            const response = await axios.get(`${BASE_URL}/todos${API_KEY}`);

            console.log("response: ", response)

            this.setState({
                listData: response.data.todos
            });
        } catch (error) {
            console.log('error: ', error);
        }

    }

    addItem(item) {
        this.setState({
            listData: [item, ...this.state.listData]
        })
    }

    async deleteItem(id) {
        await axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);

        this.getListData();
    }

    componentDidMount() {
        this.getListData();
    }

    render() {
        return (
            <div className="container">
                <h1 className="center">To Do List</h1>
                <AddItem addItem={this.addItem.bind(this)} />
                <List delete={this.deleteItem.bind(this)} data={this.state.listData} />
            </div>
        );
    }
}

export default App;
