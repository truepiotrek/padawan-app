import React from 'react';

function List(props) {
    return (
        <div className="list">
            {props.data.map(function(arrayItem, index) {
                return (<div className='list-item' key={index + ' ' + arrayItem}>{arrayItem}</div>);
            })}
        </div>
    )
};

export default List;
