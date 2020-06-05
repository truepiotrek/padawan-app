import React from 'react';

function List(props) {
    return (
        <div className="list">
            {props.data.map(function(arrayItem) {
                return (<div className='list-item' key={arrayItem}>{arrayItem}</div>);
            })}
        </div>
    )
};

export default List;
