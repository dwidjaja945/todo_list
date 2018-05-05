import React from 'react';


export default (props) => {
    if (!props.data.length) {
        return (
            <h1 className='center grey-text text-lighten-2'>No To Do Items</h1>
        )
    }

    const listElements = props.data.map(( item , itemIndex ) => {
        return (
            <li key={itemIndex} className='collection-item row' >
                <div className='col s10'>
                    {item.title}
                </div>
                <div className='col s2 right-align'>
                    <button onClick={ props.delete.bind( this , item._id ) } className='btn red darken-2'>Delete</button>
                </div>
            </li>
        )
    });
    return (
        <ul className='collection'>
            {listElements}
        </ul>
    )
}
