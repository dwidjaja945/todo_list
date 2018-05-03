import React, { Component } from 'react';


class AddItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            details: ''
        }

        this.handleAddItem = this.handleAddItem.bind(this);
    }

    handleAddItem(event) {
        event.preventDefault();

        this.props.addItem(this.state);

        console.log('item: ', this.state);

        setTimeout(() => {this.setState({
            title: '',
            details: ''
        })},500)
    }

    render(props) {

        const { title, details } = this.state

        return (
            <form onSubmit={this.handleAddItem}>
                <div className='row'>
                    <div className='col s12 m8 offset-m2'>
                        <input value={title} placeholder='Title' onChange={(event) => this.setState({ title: event.target.value })} type='text' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col s12 m8 offset-m2'>
                        <input value={details} onChange={e => this.setState({ details: e.target.value })} placeholder='Details' type='text' />
                    </div>
                </div>
                <div className='row'>
                    <div className="right-align col s12 m8 offset-m2">
                        <button className='btn purple darken-2' >Add Item</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default AddItem;