import React from 'react';


export default (props) => {
    if(!props.data.length) {
        return (
            <h1 className='center grey-text text-lighten-2'>No To Do Items</h1>
        )
    }

    // Add delete button to li so can delete item
    const listElements = props.data.map((item, itemIndex) => {
        return (
            <li key={itemIndex} className='collection-item' >{item.title}</li>
        )
    });
    return (
        <ul className='collection'>
            {listElements}
        </ul>
    )
}
