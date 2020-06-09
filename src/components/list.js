import React from 'react';

function List(props) {

    function handleRemoval(index){
        if(typeof props.removeItem === 'function') {
            props.removeItem(index);
        }
    };

    return (
        <div className="list">
            {props.data.map(function(arrayItem, index) {
                return (<div className='list-item' key={index + ' ' + arrayItem}>{arrayItem}
                <button type="button" className={"item-removal"}
                        onClick={(event) => handleRemoval(index)}>Usuń</button></div>);
            })}
        </div>
    )
};

export default List;
